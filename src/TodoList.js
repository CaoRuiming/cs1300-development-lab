import { useState } from "react";
import {
  Input,
  List,
  ListItemText,
  ListItem,
  Paper,
} from "@material-ui/core";
import mockListItems from './mock';

export default function TodoList() {
  const [idCounter, setIdCounter] = useState(0);
  const [items, setItems] = useState(mockListItems);
  const [formValue, setFormValue] = useState('');

  const listItemComponents = items.map(item => {
    return (
      <ListItem
        button
        key={item.id}
        onClick={() => setItems(items.filter(x => x.id !== item.id))}
      >
        <ListItemText>{item.value}</ListItemText>
      </ListItem>
    );
  });

  return (
    <Paper id="todo-list">
      <Input
        id={"todo-form"}
        placeholder={"Type new item here then press enter..."}
        value={formValue}
        onChange={e => setFormValue(e.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter' && formValue.length > 0) {
            setItems([...items, { id: idCounter, value: formValue }]);
            setIdCounter(idCounter + 1);
            setFormValue('');
          }
        }}
      />
      <List>
        {listItemComponents}
      </List>
    </Paper>
  );
}
