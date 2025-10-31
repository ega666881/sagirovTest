import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';


/**
 * @param {import('@mui/material').TypographyProps}
 */
export default function EditableTypography(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(props.children);
  const [originalText, setOriginalText] = useState(props.children)

  const handleClick = () => {
    setOriginalText(props.children)
    
    setIsEditing(true);
  };

  const handleBlur = () => {
    
    setText(originalText)
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsEditing(false);
    }
  };


  useEffect(() => {
    
    setText(props.children)
    console.log(originalText, "Ffff")
  }, [props.children]);

  return (
    <Typography
      {...props}
      onClick={handleClick}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      sx={{
        cursor: isEditing ? 'text' : 'pointer',
        outline: isEditing ? '1px solid #1976d2' : 'none',
        ...props.sx
      }}
    >
      {text}
    </Typography>
  );
}