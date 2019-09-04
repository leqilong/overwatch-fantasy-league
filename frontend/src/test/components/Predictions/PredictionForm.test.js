import React from 'react';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow, mount } from 'enzyme';

import { storeFactory } from '../../testUtils';
import PredictionForm from '../../../components/Predictions/PredictionForm';

const setup = (setupProps, handleSubmitMock, initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(<Provider store={store}><MuiThemeProvider><PredictionForm matchData={setupProps} onSubmit={handleSubmitMock} /></MuiThemeProvider></Provider>);
  return wrapper;
}

describe('render', ()=> {
  let handleSubmitMock = jest.fn();
  let wrapper;
  const setupProps = {
      competitors: {
        0: {
          name: 'Seoul Dynasty',
          icon: 'https://bnetcmsus-a.akamaihd.net/cms/page_media/E9MU0AK0JIXT1507858876249.svg'
        },
        1: {
          name: 'Vancouver Titans',
          icon: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/0KOSPFU6UC411543976755522.svg'
        }
      }
  };
  beforeEach(()=> {
    const initialState = {};
    wrapper = setup(setupProps, handleSubmitMock, initialState);
  });

  describe('prediction has not been made', ()=>{
    test('renders component without error', ()=>{
      expect(wrapper.length).toBe(1);
    });

    test('renders series winner radio buttons', ()=>{
      expect(wrapper.find('RadioButtonGroup').length).toBe(1);
    });

    test('renders final scores dropdown menus', ()=>{
      expect(wrapper.find('SelectField').length).toBe(2);
    });
  });

  describe('prediction has been made', ()=>{
    let resetSection = jest.fn();
    beforeEach(()=>{
      const initialState = {
        form:{
          seriesWinner: "Vancouver Titans",
          seriesScoreTeam1: 1,
          seriesScoreTeam2: 3
        }
      }
      wrapper = setup(setupProps, handleSubmitMock, initialState);
    });

    test('renders component without error', ()=>{
      expect(wrapper.length).toBe(1);
    });
  });
});
