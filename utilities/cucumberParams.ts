import { defineParameterType } from 'cucumber';

defineParameterType({
    name: 'city',
    regexp: /.*/,
    useForSnippets: true,
    transformer: (city: string): string => {
        return city.charAt(0).toUpperCase() + city.substr(1);
    }
});