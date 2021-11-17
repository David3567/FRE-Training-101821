const PROPS_KEY = {
  EVENT_KEY_START_WITH: 'on',
  CHILDREN: 'children',
};

const PROPS_WARNING = {
  CLASS: 'class',
};

const WARNING_MAP = {
  class: `WARNING: Invalid DOM property \`class\`. Did you mean \`className\`?`,
};

const myElement = {
  type: 'section',
  props: {
    children: [
      {
        type: 'header',
        children: {
          type: 'h1',
          props: {
            children: 'Counter: 0',
          },
        },
      },
      {
        type: 'button',
        props: {
          children: 'Add',
          className: 'btn',
          onClick: () => alert('add'),
        },
      },
    ],
    className: 'app-counter',
  },
};

function isWarningProp(keyStr) {
  switch (keyStr) {
    case PROPS_WARNING.CLASS:
      console.error(WARNING_MAP[PROPS_WARNING.CLASS]);
      return true;
    default:
      return false;
  }
}

function isEventProp(keyStr) {
  return keyStr.startsWith(PROPS_KEY.EVENT_KEY_START_WITH);
}

function isChildren(keyStr) {
  return keyStr === PROPS_KEY.CHILDREN;
}

function render(currentElement, parentElement) {
  const { type, props } = currentElement;

  // create DOM element based on type
  const currentDOM = document.createElement(type);

  // add props to the currentDOM
  Object.entries(props).forEach(([key, value]) => {
    if (isWarningProp(key)) {
      return;
    }

    if (isEventProp(key)) {
      const eventType = key.substring(2).toLocaleLowerCase();
      currentDOM.addEventListener(eventType, value);
      return;
    }

    if (isChildren(key)) {
      if (typeof value === 'string') {
        const textNode = document.createTextNode(value);
        currentDOM.appendChild(textNode);
        return;
      }
      if (Array.isArray(value)) {
        value.forEach((ele) => {
          render(ele, currentDOM);
        });
        return;
      }
      render(value, currentDOM);
      return;
    }
    currentDOM[key] = value;
  });

  parentElement.appendChild(currentDOM);
}

const MyReactDOM = {
  render,
};

export default MyReactDOM;
