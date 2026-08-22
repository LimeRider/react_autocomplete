import React, { useState } from 'react';
import './App.scss';
import { peopleFromServer } from './data/people';
import { Person } from './types/Person';
import { Autocomplete } from './components/Autocomplete';

export const App: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <div className="container">
      <main className="section is-flex is-flex-direction-column">
        <h1 className="title" data-cy="title">
          {selectedPerson
            ? `${selectedPerson.name} (${selectedPerson.born} - ${selectedPerson.died})`
            : 'No selected person'}
        </h1>

        <Autocomplete
          people={peopleFromServer}
          delay={1000}
          onSelected={setSelectedPerson}
        />

        {selectedPerson === null && (
          <div
            className="notification is-danger is-light
             mt-3 is-align-self-flex-start"
            role="alert"
            data-cy="no-suggestions-message"
            style={{ display: 'none' }}
          />
        )}
      </main>
    </div>
  );
};
