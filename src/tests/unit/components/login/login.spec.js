import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Login from '@/components/login/Login.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Components > Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Login, {
      localVue,
      store: new Vuex.Store({
        modules: {
          'login': {
            namespaced: true,
            getters: {
              getToken: () => null
            }
          }
        }
      })
    })
  });

  it('should matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
