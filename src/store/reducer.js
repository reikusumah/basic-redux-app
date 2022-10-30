// state (3)
const initialState = {
  todos: [
    {
      id: 1,
      title: "this is title",
    },
  ],
};

// reducer (2)
const listReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default: {
      return state;
    }
  }
};

export default listReducer;
