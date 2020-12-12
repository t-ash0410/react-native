interface ITask {
  id: number,
  title: string,
  description: string
};

const tasks: ITask[] = [
  {
    id: 1,
    title: 'title 1',
    description: 'description'
  },
  {
    id: 2,
    title: 'title 2',
    description: 'long description'
  },
  {
    id: 3,
    title: 'title 3',
    description: 'long description'
  }
];

export default function GetTasks() {
  return tasks;
};
