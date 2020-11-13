const defaultListItems = [];

for (let i = 1; i < 20; i ++) {
  defaultListItems.push({ id: -i, value: `Item ${i} (Click to delete)` });
}

export default defaultListItems;
