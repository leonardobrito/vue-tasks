import taskItem from '../../../../store/modules/taskItem'
import MockAdapter from 'axios-mock-adapter';
import axios from "axios";
import { TASKITEM_URL } from '../../../../constants/urls';

const mock = new MockAdapter(axios);
const mockTaskItem = [{
  id: 1,
  checked: false,
  task: {
    id: 1,
    name: 'Learn Vuejs',
    description: 'Description',
    user_id: 1
  }
}]

describe('Store > Modules > TaskItem', () => {
  it('should do mutate on taskItem', () => {
    const { assign } = taskItem.mutations;

    assign(taskItem.state, { taskItems: mockTaskItem});

    const { taskItems } = taskItem.state;

    expect(taskItems.length).toBe(1);
  });

  it('should make a update taskitem request through setTaskitem', async () => {
    const { assign } = taskItem.mutations;

    assign(taskItem.state, { taskItems: mockTaskItem});

    mock.onPut(`${TASKITEM_URL}/${1}`).reply(200);

    const { setTaskitem } = taskItem.actions;
    const { state } = taskItem;
    const commit = jest.fn();
    const mutableTaskItem = { id: 1, checked: true };

    await setTaskitem({ commit, state }, mutableTaskItem);

    const expected = {
      taskItems: [{
        checked: true,
        id: 1,
        task: {
          description: 'Description', id: 1, name: 'Learn Vuejs', user_id: 1
        }
      }]
    };

    expect(commit).toHaveBeenCalledWith('assign', expected);
  })
});
