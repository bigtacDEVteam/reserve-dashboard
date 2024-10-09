import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class KavassService {
  private accessToken: string | null = null; //use proxy sbb CORS
  private apiUrl = '/api/researchapi/getAccessToken';
  private barrierListUrl = '/api/researchapi/carlock/list';
  private barrierDetailUrl = '/api/researchapi/carlock/get'; // Barrier detail
  private controlBarrierUrl = '/api/researchapi/carlock/control'; // Control barrier
  private ultrasonicBarrierUrl = '/api/researchapi/carlock/control'; // Control barrier

  private appId = 'duz5bjwss45c';
  private secret = '9a0937ced39e4f7d903284323e0ee3de';

  constructor(private http: HttpClient) {}

  getAccessToken(): Observable<AccessTokenResponse> {
    const url = `${this.apiUrl}?appid=${this.appId}&secret=${this.secret}`;
    return this.http.get<AccessTokenResponse>(url).pipe(
      tap((response) => {
        if (response.code === 200) {
          this.accessToken = response.data.accessToken; // Store the token
          console.log('Kavass token successful:', this.accessToken);
        } else {
          console.error('Failed to get access token:', response.msg);
        }
      }),
      catchError((error) => {
        console.error('Error retrieving access token:', error);
        return throwError(error);
      })
    );
  }

  getParkingBarrierList(
    index: number,
    size: number
  ): Observable<ParkingBarrierResponse> {
    if (!this.accessToken) {
      console.error(
        'No access token found. Please get the access token first.'
      );
      return throwError(() => new Error('No access token found.'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      AccessToken: this.accessToken,
    });

    const body = {
      index: index,
      size: size,
    };

    return this.http
      .post<ParkingBarrierResponse>(this.barrierListUrl, body, { headers })
      .pipe(
        tap((response) => {
          console.log('Full parking barrier response:', response);

          if (response.code === 200) {
            console.log('Parking barrier list:', response.data.content);
          } else {
            console.error('Failed to get parking barrier list:', response.msg);
          }
        }),
        catchError((error) => {
          console.error('Error fetching parking barrier list:', error);
          return throwError(error);
        })
      );
  }

  getBarrierDetail(did: string): Observable<BarrierDetailResponse> {
    if (!this.accessToken) {
      console.error(
        'No access token found. Please get the access token first.'
      );
      return throwError(() => new Error('No access token found.'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      AccessToken: this.accessToken,
    });

    const body = {
      did: did,
    };

    return this.http
      .post<BarrierDetailResponse>(this.barrierDetailUrl, body, { headers })
      .pipe(
        tap((response) => {
          console.log('Full barrier detail response:', response);

          if (response.code === 200) {
            console.log('Barrier detail:', response.data);
          } else {
            console.error('Failed to get barrier detail:', response.msg);
          }
        }),
        catchError((error) => {
          console.error('Error fetching barrier detail:', error);
          return throwError(error);
        })
      );
  }

  controlBarrier(
    did: string,
    type: number
  ): Observable<ControlBarrierResponse> {
    if (!this.accessToken) {
      console.error(
        'No access token found. Please get the access token first.'
      );
      return throwError(() => new Error('No access token found.'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      AccessToken: this.accessToken,
    });

    const body = {
      did: did,
      type: type,
    };

    return this.http
      .post<ControlBarrierResponse>(this.controlBarrierUrl, body, { headers })
      .pipe(
        tap((response) => {
          console.log('Control barrier response:', response);
          if (response.code === 200) {
            console.log('Control successful:', response.msg);
          } else {
            console.error('Failed to control barrier:', response.msg);
          }
        }),
        catchError((error) => {
          console.error('Error controlling barrier:', error);
          return throwError(error);
        })
      );
  }

  setUltrasonicTime(did: string, ut: number): Observable<any> {
    const url = `${this.ultrasonicBarrierUrl}/researchapi/carlock/controlUt`;
    const body = {
      did: did,
      ut: ut,
    };
    console.log('Sending to API:', body);

    return this.http.post(url, body, {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    });
  }
}

// Interface for Access Token response
interface AccessTokenResponse {
  code: number;
  msg: string;
  data: {
    accessToken: string;
    expiresIn: number;
  };
}
// Interface for Barrier Detail response
interface BarrierDetailResponse {
  code: number;
  msg: string;
  data: {
    model: string;
    locationState: number;
  };
}

// Interface for Parking Barrier List response
interface ParkingBarrierResponse {
  code: number;
  msg: string;
  data: {
    index: number;
    size: number;
    total: number;
    content: Array<any>;
    pages: number;
  };
}

// Interface for Control Barrier response
interface ControlBarrierResponse {
  code: number;
  msg: string;
  data: {};
}
