import './WorkItem.css';

export default function WorkItem(props) {
  const contentHTML = props.contentHTML;
  const link = props.link;
  return (
    <div className='flex flex-col gap-4 bg-background py-4'>
      <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
      <a
        className='font-semibold text-base text-subtitle hover:text-hightlight transition duration-300'
        href={link}
      >
        Explore more ...
      </a>
    </div>
  );
}
