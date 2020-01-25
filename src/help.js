const getById = (state, id) => state.all.find(item => item.id === id);

const setById = (state, id, newItem) => state.all
  .map((item) => {
    if (item.id === id) return newItem;
    return item;
  });

const isEmptyObj = obj => (
  !obj || typeof obj !== 'object' || (Object.entries(obj).length === 0 && obj.constructor === Object)
);

export { setById, getById, isEmptyObj };
