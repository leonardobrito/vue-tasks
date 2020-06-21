import taskItem from '@/store/modules/taskItem'

describe('Store > Modules > TaskItem', () => {
  it('should do mutate on taskItem', () => {
    const { assign } = taskItem.mutations;

    assign(taskItem.state, { taskItems: mockTaskItem});

    const { taskItems } = taskItem.state;
    expect(taskItems.length).toBe(1);
  });
});
