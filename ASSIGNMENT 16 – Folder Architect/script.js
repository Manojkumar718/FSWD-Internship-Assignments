let root = {
  name: "root",
  type: "folder",
  children: [],
  parent: null,
  expanded: true
};

let currentFolder = root;

// CREATE FOLDER
function createFolder() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();

  if (!name) return alert("Enter name");

  currentFolder.children.push({
    name,
    type: "folder",
    children: [],
    parent: currentFolder,
    expanded: false
  });

  input.value = "";
  render();
}

// CREATE FILE
function createFile() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();

  if (!name) return alert("Enter name");

  currentFolder.children.push({
    name,
    type: "file"
  });

  input.value = "";
  render();
}

// GO BACK ✅ (FIXED)
function goBack() {
  if (currentFolder.parent) {
    currentFolder = currentFolder.parent;
    render();
  } else {
    alert("Already at root");
  }
}

// PATH
function getPath(folder) {
  let path = [];
  let curr = folder;

  while (curr) {
    path.unshift(curr.name);
    curr = curr.parent;
  }

  return path.join(" / ");
}

// RENDER
function render() {
  const list = document.getElementById("fileList");
  const path = document.getElementById("currentPath");

  list.innerHTML = "";
  path.innerText = "📍 " + getPath(currentFolder);

  function renderTree(folder, parentElement, depth = 0) {
    folder.children.forEach(item => {
      const li = document.createElement("li");
      li.style.paddingLeft = depth * 20 + "px";

      if (item.type === "folder") {
        // Arrow button
        const arrow = document.createElement("span");
        arrow.innerText = item.expanded ? "▼ " : "▶ ";
        arrow.style.cursor = "pointer";

        arrow.onclick = (e) => {
          e.stopPropagation();
          item.expanded = !item.expanded;
          render();
        };

        // Folder name (click = ENTER)
        const name = document.createElement("span");
        name.innerText = "📂 " + item.name;
        name.style.cursor = "pointer";

        name.onclick = () => {
          currentFolder = item;
          render();
        };

        li.appendChild(arrow);
        li.appendChild(name);
        parentElement.appendChild(li);

        if (item.expanded) {
          renderTree(item, parentElement, depth + 1);
        }

      } else {
        li.innerText = "📄 " + item.name;
        parentElement.appendChild(li);
      }
    });
  }

  renderTree(root, list);
}

render();