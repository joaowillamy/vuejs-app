const getById = (state, id) => state.all.find(item => item.id === id);

const setById = (state, id, newItem) => state.all
  .map((item) => {
    if (item.id === id) return newItem;
    return item;
  });

export { setById, getById };
