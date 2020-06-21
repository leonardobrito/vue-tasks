import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ListTaskitem from '@/components/taskItem/list-taskitem/ListTaskitem.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const setTaskitem = jest.fn();
const taskItem = {
  namespaced: true,
  state: {
    taskItems: [
      {
        id: 1,
        checked: false,
        task: {
          id: 1,
          name: 'Learn Vuejs',
          description: 'Description',
          user_id: 1
        }
      },
      {
        id: 2,
        checked: true,
        task: {
          id: 2,
          name: 'Do tests',
          description: 'Description 2',
          user_id: 1
        }
      }
    ],
  },
  actions: {
    setTaskitem
  },
}

describe('Components > TaskItem > ListTaskitem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ListTaskitem, {
      localVue,
      store: new Vuex.Store({
        modules: { taskItem }
      })
    });
  });

  it('should matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render taskItemsOverview expected text', () => {
    const expected = '1 of 2 are checked';
    expect(wrapper.vm.taskItemsOverview).toBe(expected);
  });

  describe('when taskitem is checked', () => {
    it('should call setTaskitem action', () => {
      let checkbox = wrapper.find('input');
      checkbox.trigger('click');

      expect(setTaskitem).toBeCalled();
    });
  });
});
