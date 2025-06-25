import './TechStack.css';

import HightlightTitle from './../HightlightTitle/HightlightTitle';
import Tools from './Tools/Tools';
import Skills from './Skills/Skills';

export default function TechStack(props) {
  const tools = props.tools;
  const engineering = props.engineering;
  const developingWithData = props.developingWithData;

  return (
    <div className='container mx-auto px-6 md:px-10 flex flex-col gap-6'>
      <HightlightTitle>TECH STACK</HightlightTitle>
      <Tools title={tools.title} items={tools.items} />
      <div className='flex flex-row gap-6 items-center flex-wrap'>
        <Skills
          className='w-full md:flex-1'
          title={engineering.title}
          items={engineering.items}
        />
        <Skills
          className='w-full md:flex-1'
          title={developingWithData.title}
          items={developingWithData.items}
        />
      </div>
    </div>
  );
}
