// it('CreateMatch should return an error when required fields are missing', (done) => {
//   const mockMatchData: Pick<Matche, 'competition' | 'equipe1' | 'equipe2' | 'date_matche'> = {
//     competition: 'Test Competition',
//     equipe1: 'Test Team 1',
//     equipe2: 'Test Team 2',
//     date_matche: new Date(),
//   };

//   const expectedErrorMessage = 'Required field missing';

//   const matcheService = TestBed.inject(MatcheService);
//   const httpMock = TestBed.inject(HttpTestingController);

//   matcheService.createMatch({ ...mockMatchData, competition: undefined }).subscribe({
//     error: (error) => {
//       expect(error.message).toEqual(expectedErrorMessage);
//       done();
//     },
//   });

//   const request = httpMock.expectOne(matcheService.apiUrl);
//   expect(request.request.method).toBe('POST');
//   request.error(new ErrorEvent(expectedErrorMessage));
// });


// it('CreateMatch should return an error when the date_matche field is not in the correct format', () => {
//   const mockData: Pick<Matche, 'competition' | 'equipe1' | 'equipe2' | 'date_matche'> = {
//     competition: 'Ligue 1',
//     equipe1: 'Paris Saint-Germain',
//     equipe2: 'Monaco',
//     date_matche: '2022-13-01', // Invalid date format
//   };

//   const errorResponse = new HttpErrorResponse({
//     error: { message: 'Invalid date format' },
//     status: 400,
//     statusText: 'Bad Request',
//   });

//   const service: MatcheService = TestBed.inject(MatcheService);
//   const httpMock: HttpTestingController = TestBed.inject(HttpTestingController);

//   service.createMatch(mockData).subscribe(
//     () => fail('Expected an error, but no error was found'),
//     (error) => {
//       expect(error.message).toEqual('Invalid date format');
//     }
//   );

//   const request = httpMock.expectOne(service.apiUrl);
//   expect(request.request.method).toBe('POST');
//   request.error(errorResponse);
// });


// it('createMatch should return a new match when data is valid', () => {
//   const mockMatch: Pick<Matche, 'competition' | 'equipe1' | 'equipe2' | 'date_matche'> = {
//     competition: 'Ligue 1',
//     equipe1: 'Paris Saint-Germain',
//     equipe2: 'Monaco',
//     date_matche: new Date('2022-05-15'),
//   };

//   const mockHttpClient = {
//     post: jest.fn().mockReturnValue(of(mockMatch)),
//   };

//   const matcheService = new MatcheService(mockHttpClient as any);

//   matcheService.createMatch(mockMatch).subscribe((result) => {
//     expect(result).toEqual(mockMatch);
//     expect(mockHttpClient.post).toHaveBeenCalledWith('http://localhost:8000/api/matches', mockMatch, {
//       headers: new HttpHeaders({
//         Authorization: `Bearer ${localStorage.getItem('access_token') || ''}`,
//         'Content-Type': 'application/json',
//       }),
//     });
//   });
// });



// it('createMatch should return an error when the match ID does not exist', (done) => {
//   const mockData: Pick<Matche, 'competition' | 'equipe1' | 'equipe2' | 'date_matche'> = {
//     competition: 'Example Competition',
//     equipe1: 'Team 1',
//     equipe2: 'Team 2',
//     date_matche: new Date(),
//   };

//   const mockError = new HttpErrorResponse({
//     error: { message: 'Match not found' },
//     status: 404,
//     statusText: 'Not Found',
//   });

//   const matcheService = TestBed.inject(MatcheService);
//   const httpMock = TestBed.inject(HttpTestingController);

//   matcheService.createMatch(mockData).subscribe(
//     () => fail('Expected an error, but no error was found'),
//     (error) => {
//       expect(error.message).toEqual('Match not found');
//       done();
//     }
//   );

//   const request = httpMock.expectOne(matcheService.apiUrl);
//   request.error(mockError);
// });


// it('should return an error when the match ID does not exist', (done) => {
//   const matchId = 999999; // Assuming this ID does not exist
//   const matchData: Pick<Matche, 'competition' | 'equipe1' | 'equipe2' | 'date_matche'> = {
//     competition: 'Test Competition',
//     equipe1: 'Team 1',
//     equipe2: 'Team 2',
//     date_matche: new Date(),
//   };

//   service.createMatch(matchData).subscribe({
//     next: () => {
//       fail('Expected an error, but got a match created');
//     },
//     error: (error) => {
//       expect(error.message).toContain('Match not found');
//       done();
//     },
//   });
// });



// it('should return an error when the match ID does not exist', (done) => {
//   const matchId = 999999; // Replace with a non-existing match ID
//   const expectedErrorMessage = 'Match not found';

//   service.deleteMatch(matchId).subscribe({
//     error: (error) => {
//       expect(error.message).toBe(expectedErrorMessage);
//       done();
//     },
//     complete: () => {
//       fail('Expected an error but completed successfully');
//       done();
//     },
//   });
// });

