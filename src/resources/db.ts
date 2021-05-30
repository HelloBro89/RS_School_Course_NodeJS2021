// type ObjU = {
//     id: string;
//     name: string;
//     login: string;
//     password: string;
// };

// type ObjB = {
//     id: string;
//     title: string;
//     columns: {}[];
// };

type ObjT = {
  id?: string;
  title?: string;
  order?: number;
  description?: string;
  userId?: string | null;
  boardId?: string | null;
  columnId?: string | null;
};

const DBusers: {
  id: string;
  name: string;
  login: string;
  password: string;
}[] = [];
const DBboards: { id: string; title: string; columns: {}[] }[] = [];
const DBtasks: ObjT[] = [];

export { DBusers, DBboards, DBtasks };
