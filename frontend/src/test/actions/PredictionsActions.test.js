import moxios from 'moxios';
import http from '../../apis/request';
import { fetchMatchesMockData } from '../mocks/fetchMatchesMockData';
import { fetchMatchMockData } from '../mocks/fetchMatchMockData';
import { createPredictionMockData } from '../mocks/createPredictionMockData';
import { fetchPredictionsMockData } from '../mocks/fetchPredictionsMockData';
import { fetchPredictionMockData } from '../mocks/fetchPredictionMockData';
import { mockStore } from '../testUtils';
import { fetchMatches, fetchMatch, createPrediction, fetchPredictions, fetchPrediction } from '../../actions/PredictionsActions';
import { FETCH_MATCHES, FETCH_MATCH, CREATE_PREDICTION, FETCH_PREDICTIONS, FETCH_PREDICTION} from '../../actions/Types';

describe('fetchMatches action creator', ()=> {
  beforeEach(()=>{
    moxios.install(http);
  });

  afterEach(()=> {
    moxios.uninstall(http);
  })

  test('creates FETCH_MATCHES action after successfully fetching the matches', ()=> {
     moxios.wait(()=>{
       const request = moxios.requests.mostRecent();
       request.respondWith({
         status: 200,
         response: fetchMatchesMockData
       })
     })
     const expectedAction = { type: FETCH_MATCHES, payload: fetchMatchesMockData };

     const store = mockStore();
     return store.dispatch(fetchMatches())
        .then(()=>{
          expect(store.getActions()[0]).toEqual(expectedAction);
      });
  });
});

describe('fetchMatch action creator', ()=> {
  beforeEach(()=>{
    moxios.install(http);
  });

  afterEach(()=> {
    moxios.uninstall(http);
  })

  test('creates FETCH_MATCH action after successfully fetching the match', ()=> {
     moxios.wait(()=>{
       const request = moxios.requests.mostRecent();
       request.respondWith({
         status: 200,
         response: fetchMatchMockData
       })
     })
     const matchId = 30151;
     const expectedAction = { type: FETCH_MATCH, payload: fetchMatchMockData };

     const store = mockStore();
     return store.dispatch(fetchMatch(matchId))
        .then(()=>{
          expect(store.getActions()[0]).toEqual(expectedAction);
      });
  });
});


describe('createPrediction action creator', ()=> {
  beforeEach(()=>{
    moxios.install(http);
  });

  afterEach(()=> {
    moxios.uninstall(http);
  })

  test('creates CREATE_PREDICTION action after successfully submitting the form values', ()=> {
     moxios.wait(()=>{
       const request = moxios.requests.mostRecent();
       request.respondWith({
         status: 200,
         response: createPredictionMockData
       })
     })
     const matchId = 30151;
     const matchEndDate = "2019-09-06T02:00:00.000Z";
     const predictionFormData = {
       matchId: matchId,
       seriesScoreTeam1: 4,
       seriesScoreTeam2: 2,
       seriesWinner: "Seoul Dynasty"
     }

     const expectedAction = { type: CREATE_PREDICTION, payload: createPredictionMockData };

     const store = mockStore({auth: {isLoggedIn: true, username: "pxrplebit"}});
     return store.dispatch(createPrediction({predictionFormData, matchId, matchEndDate}))
        .then(()=>{
          expect(store.getActions()[0]).toEqual(expectedAction);
      });
  });
});


describe('fetchPredictions action creator', ()=> {
  beforeEach(()=>{
    moxios.install(http);
  });

  afterEach(()=> {
    moxios.uninstall(http);
  })

  test('creates FETCH_PREDICTIONS action after successfully fetching predictions', ()=> {
     moxios.wait(()=>{
       const request = moxios.requests.mostRecent();
       request.respondWith({
         status: 200,
         response: fetchPredictionsMockData
       })
     })
     const expectedAction = { type: FETCH_PREDICTIONS, payload: fetchPredictionsMockData};

     const store = mockStore({auth: {isLoggedIn: true, username: "pxrplebit"}});
     return store.dispatch(fetchPredictions())
        .then(()=>{
          expect(store.getActions()[0]).toEqual(expectedAction);
      });
  });
});

describe('fetchPrediction action creator', ()=> {
  beforeEach(()=>{
    moxios.install(http);
  });

  afterEach(()=> {
    moxios.uninstall(http);
  })

  test('creates FETCH_PREDICTION action after successfully fetching a prediction', ()=> {
     moxios.wait(()=>{
       const request = moxios.requests.mostRecent();
       request.respondWith({
         status: 200,
         response: fetchPredictionMockData
       })
     })
     const expectedAction = { type: FETCH_PREDICTION, payload: fetchPredictionMockData};
     const matchId = '21340';
     const store = mockStore({auth: {isLoggedIn: true, username: "pxrplebit"}});
     return store.dispatch(fetchPrediction(matchId))
        .then(()=>{
          expect(store.getActions()[0]).toEqual(expectedAction);
      });
  });
});
