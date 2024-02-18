import {PortableText as PortableTextComponent} from '@portabletext/react';

const PortableText = ({content}) => {
  return <PortableTextComponent value={content} />;
};

export default PortableText;
