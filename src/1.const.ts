export default {};

type State = {
  isFetching: boolean;
  data?: Person[];
  errorMessage?: string;
};

const fetch = () => ({ type: "fetch" });
const success = (data: Person[]) => ({ type: "success", payload: { data } });
const failure = (error: string) => ({ type: "failure", payload: { error } });

type Action =
  | ReturnType<typeof fetch>
  | ReturnType<typeof success>
  | ReturnType<typeof failure>;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "fetch":
      return { isFetching: true };
    case "success":
      return { ...state, data: action.payload.data, isFetching: false };
    // case "failure":
    //   return { ...state, isFetching: false };
  }
};
