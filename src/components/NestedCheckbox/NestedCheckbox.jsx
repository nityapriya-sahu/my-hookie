// 1. create json data
// 2. craete checkbox ui one as a comp.
// 3. call that comp. in main comp.
// 4. map the json data  and again call checkbox comp. recursively inside it
// 5. create a state management to centralize the store using usestate in parent comp.
// 6. pass those state variable as props in checkboxes comp. to access it.
// 7. add checked & onchange property in input box
// 8. in handleChange fn() add setChecked as previous value then return, so what we return here it'll be update value
// 9. create a const variable inside setChecked to store which is the copy of already checked before
// 10. handleChange also send id to fn(). i.e-> node.id, Then set this id to that const varibale i.e-> newState
// 11. console the checked.

//--------------------------
// 12.Instead of passing node.id in handleChnage fn() pass only node to checked all the child if we check on parent.
// 13. Then change on id to [node.id] in newState variable.
// 14. i replace in handleChange = e to e.target.checked | then in fn() params like 'isChecked' & pass isChecked in newState
// 15. Write the logic of updateChildren fn().

import React, { useState } from "react";
import CheckboxesData from "./CheckboxesData.json";

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      //If children are present, add all of them to new state
      const updateChildren = (node) => {
        // 16. if children is present then loop through each children and add it to newState
        node?.children?.forEach((child) => {
          //add each child also isChecked
          newState[child.id] = isChecked;
          //18. but there is a bug like if i check on parent1, then it not affect on children's children.
          // so, if child has children then update the children
          child.children && updateChildren(child);
        });
      };
      // 17. call this fn() here
      updateChildren(node);

      //TRICKY PART
      // 19. If all children are checked, mark the parent as checked
      const verifyChecked = (node) => {
        if (!node.children) {
          return newState[node.id] || false;
        }
        const allChildrenChecked = node.children.every((child) =>
          verifyChecked(child)
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };
      CheckboxesData.forEach((node) => verifyChecked(node));
      return newState;
    });
  };
  console.log(checked);

  return (
    <div>
      {data.map((node) => (
        <div key={node.id} className="parent_div">
          <input
            type="checkbox"
            checked={checked[node.id] || false}
            // onChange={(e) => handleChange(e, node)}
            // or
            onChange={(e) => handleChange(e.target.checked, node)}
          />
          <span>{node.name}</span>
          {node.children && (
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const NestedCheckbox = () => {
  const [checked, setChecked] = useState({});
  return (
    <div>
      <h1>Nested Checkbox</h1>
      <Checkboxes
        data={CheckboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default NestedCheckbox;
