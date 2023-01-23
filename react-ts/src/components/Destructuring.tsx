import * as React from 'react';

export interface IAppProps {
    title: string
    content: string
    commentQty: number
    tags: string[]
}

export default function Destructuring ({title, content, commentQty, tags}: IAppProps) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentários: {commentQty}</p>
        <div>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))}
        </div>
    </div>
  );
}
