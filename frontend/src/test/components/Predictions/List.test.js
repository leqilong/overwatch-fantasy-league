import React from 'react';
import { shallow } from 'enzyme';
import List from '../../../components/Predictions/List';

const defaultProps = {
  matchesData: [{
    competitors: {
      0: {
        name: 'Seoul Dynasty',
        icon: 'https://bnetcmsus-a.akamaihd.net/cms/page_media/E9MU0AK0JIXT1507858876249.svg'
      },
      1: {
        name: 'Vancouver Titans',
        icon: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/0KOSPFU6UC411543976755522.svg'
      }
    },
    startDate: '2019-09-05T23:00:00.000Z',
    id: 30151,
    state: 'PENDING',
    scores: [
      {value: 0},
      {value: 0}
    ]
  }]
}

const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<List {...setupProps} />);
}

describe('if logged in', ()=>{
  let wrapper;
  beforeEach(()=> {
    wrapper = setup({isLoggedIn: true});
  });

  test('renders component without error', ()=>{
    expect(wrapper.exists()).toBe(true);
  });

  describe('prediction button', ()=>{
    describe('if no prediction has been made', ()=>{
      let wrapper;
      beforeEach(()=> {
        wrapper = setup({...defaultProps, ...{isLoggedIn: true}});
      });
      test('renders Make Prediction text', ()=>{
        const buttonText = wrapper.find('Link').props()['children'];
        expect(buttonText).toBe('Make Prediction');
      });
    });

    describe('if a prediction has been made', ()=>{
      let wrapper;
      beforeEach(()=> {
        const props = Object.create(defaultProps);
        props.matchesData[0].isPredicted = true;
        props.isLoggedIn = true;
        wrapper = setup(props);
      });
      test('renders Edit Prediction text', ()=>{
        const buttonText = wrapper.find('Link').props()['children'];
        expect(buttonText).toBe('Edit Prediction');
      });
    });
  });
})

describe('if not logged in', ()=> {
  let wrapper;
  beforeEach(()=> {
    wrapper = setup({isLoggedIn: false});
  });

  test('renders component without error', ()=>{
    expect(wrapper.exists()).toBe(true);
  });
})

describe('if a match concluded', ()=> {
  let wrapper;
  const props = Object.create(defaultProps);
  props.matchesData[0].state = 'CONCLUDED';
  beforeEach(()=> {
    wrapper = setup(props);
  });

  test('renders match result', ()=>{
    const matchResult = wrapper.find('.final-score-container');
    expect(matchResult.length).toBe(1);
  });
});

describe('if a match is pending', ()=>{
  let wrapper;
  beforeEach(()=> {
    wrapper = setup();
  });
  test('does not render match result', ()=> {
    const matchResult = wrapper.find('.final-score-container');
    expect(matchResult.length).toBe(0);
  });
})
