import { useState, useEffect } from 'react';
import mockData from '../data/topicSuggestion.json';
import { TopicSuggestion } from '../model/TopicSuggestion';
import debounce from 'debounce';

export const useTopicFetchers =
  (initialValue: string): [string, string[], (input: string) => void] => {
    const [value, setValue] = useState(initialValue);
    const [suggestion, setSuggestion] = useState<string[]>([...mockData.suggestions]);


    useEffect(() => {
      // fetch some api here
      const fakeFetch = new Promise((resolve: (topic: TopicSuggestion) => void) =>
        setTimeout(() => {
          resolve(mockData as TopicSuggestion);
        }, 300));

      debounce(function () {
        fakeFetch.then((result: TopicSuggestion) => {
          setSuggestion([...result.suggestions])
        }
        ).catch((err) => {
          console.error('Cannot fetch due to ', err);
        });
      }, 200)

    }, [value])

    return [value, suggestion, setValue]
  }