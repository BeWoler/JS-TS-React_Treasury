import { ReactNode, useState } from "react";

export const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordion-item'>
      <div className='accordion-header' onClick={toggle}>
        <h3>{title}</h3>
      </div>
      {isOpen && <div className='accordion-body'>{children}</div>}
    </div>
  );
};
