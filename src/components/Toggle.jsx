import React, { useState } from 'react';

const Toggle = ({ onToggle, children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn(!on);
    onToggle(!on);
  };
  return children({ on, toggle });
}