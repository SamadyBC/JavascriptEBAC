type Task = {
  title: string;
  status: Number;
  description: string;
  priority: boolean;
};

const task1: Readonly<Task> = {
  title: "Desenvolvimento do Front-end",
  status: 0,
  description: "Desenvolver tela de cadastro de usuario",
  priority: false,
};

console.log(task1.title);

//task1.priority = true;

console.log(task1.priority);
