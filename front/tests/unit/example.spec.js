import { shallowMount } from '@vue/test-utils';
import CandidateItem from '../../src/components/CandidateItem.vue';

describe('CandidateItem.vue', () => {
  it('renders props.msg when passed', () => {
    const candidate = {
        id: 13,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEY24VfmZUwPiFt2tQdUTHuRZ-PTMtBL3B53SvmexSiy6P7V0ew',
        name: 'Ernie Ullrich',
        newThisWeek: false,
        career: 'Human Optimization Technician',
        lastCompanies: [
          'Abshire, Lindgren and Becker',
          'Macejkovic LLC'
        ],
        university: 'Vermont',
        cities: [
          'Port Charleshaven',
          'Brianneside',
          'Fredericshire',
          'East Llewellynberg'
        ],
        mainSkills: [
          'Paradigm',
          'Security'
        ],
        favorite: true
    };
    const wrapper = shallowMount(CandidateItem, {
      propsData: { candidate },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
