import React from 'react';
import { Link } from 'react-router-dom';

const EntryList = ({ route, entries }) => (
    <>
        {entries.map((entry, key) => (
            <Link className="article-list-item" key={key} to={`/${route}/${entry.id}`}>
                <h4>{entry.name}</h4>
                <span className="location">{entry.city}, {entry.province}</span>
                <p>{entry.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
    </>    
);

export default EntryList;