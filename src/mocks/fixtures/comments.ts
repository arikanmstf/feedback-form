import { Comment } from '../../context/GlobalContext';

const comments: Comment[] = [
  {
    id: 1,
    name: 'Mustafa',
    email: 'mustafa@gmail.com',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a suscipit ligula. Nam eu augue felis. Suspendisse malesuada faucibus est. Vivamus a orci in odio blandit dictum. Morbi egestas aliquam feugiat. Vivamus lectus ante, interdum non semper vel, ultricies ut magna. Morbi dolor neque, fringilla quis turpis at, condimentum laoreet odio. Etiam aliquet velit a tellus finibus egestas. Quisque sed luctus diam. Etiam scelerisque turpis id finibus commodo. Proin sed velit in felis auctor tincidunt. Nullam sed dictum elit. In hac habitasse platea dictumst. Sed consequat ac metus et pharetra. Donec vehicula tincidunt diam, vitae tincidunt est aliquet eget. Vestibulum dignissim consequat eros, sed sollicitudin elit consectetur ut.',
    stars: 5,
    createdAt: 1674371922892,
  },
  {
    id: 2,
    name: 'Jack',
    email: 'jack@gmail.com',
    content:
      'Nam et varius risus. Sed purus massa, laoreet et accumsan at, tincidunt non nibh. Nullam egestas dui at tellus suscipit, at aliquet nulla pellentesque. In faucibus dolor sed elit gravida, vitae posuere felis ultrices. Cras ut viverra augue, eu ultrices nisl. Cras sed magna fringilla, dictum felis nec, interdum ex. Nulla iaculis lobortis neque sed elementum. Curabitur ac convallis augue. Donec vitae tempor libero.',
    stars: 3,
    createdAt: 1674372022892,
  },
  {
    id: 3,
    name: 'Magnus',
    email: 'magnus@gmail.com',
    content:
      'Nam et varius risus. Sed purus massa, laoreet et accumsan at, tincidunt non nibh. Nullam egestas dui at tellus suscipit, at aliquet nulla pellentesque. In faucibus dolor sed elit gravida, vitae posuere felis ultrices. Cras ut viverra augue, eu ultrices nisl. Cras sed magna fringilla, dictum felis nec, interdum ex. Nulla iaculis lobortis neque sed elementum. Curabitur ac convallis augue. Donec vitae tempor libero.',
    stars: 3,
    createdAt: 1674372122892,
  },
  {
    id: 4,
    name: 'Anish',
    email: 'anish@gmail.com',
    content:
      'Nam et varius risus. Sed purus massa, laoreet et accumsan at, tincidunt non nibh. Nullam egestas dui at tellus suscipit, at aliquet nulla pellentesque. In faucibus dolor sed elit gravida, vitae posuere felis ultrices. Cras ut viverra augue, eu ultrices nisl. Cras sed magna fringilla, dictum felis nec, interdum ex. Nulla iaculis lobortis neque sed elementum. Curabitur ac convallis augue. Donec vitae tempor libero.',
    stars: 3,
    createdAt: 1674372222892,
  },
  {
    id: 5,
    name: 'Sarah',
    email: 'sarah@gmail.com',
    content:
      'Quisque rutrum enim eget semper vestibulum. Etiam quis lectus lorem. Proin quis aliquet augue. Vestibulum dapibus commodo lorem, ut laoreet ligula lobortis sit amet.',
    stars: 4,
    createdAt: 1674372322892,
  },
  {
    id: 6,
    name: 'Elton',
    email: 'elton@gmail.com',
    content:
      'Quisque rutrum enim eget semper vestibulum. Etiam quis lectus lorem. Proin quis aliquet augue. Vestibulum dapibus commodo lorem, ut laoreet ligula lobortis sit amet.',
    stars: 4,
    createdAt: 1674372422892,
  },
  {
    id: 7,
    name: 'Jessie',
    email: 'jessie@gmail.com',
    content:
      'Quisque rutrum enim eget semper vestibulum. Etiam quis lectus lorem. Proin quis aliquet augue. Vestibulum dapibus commodo lorem, ut laoreet ligula lobortis sit amet.',
    stars: 4,
    createdAt: 1674372522892,
  },
  {
    id: 8,
    name: 'James',
    email: 'james@gmail.com',
    content:
      'Quisque rutrum enim eget semper vestibulum. Etiam quis lectus lorem. Proin quis aliquet augue. Vestibulum dapibus commodo lorem, ut laoreet ligula lobortis sit amet.',
    stars: 4,
    createdAt: 1674372622892,
  },
  {
    id: 9,
    name: 'Ash',
    email: 'ash@gmail.com',
    content:
      'Quisque rutrum enim eget semper vestibulum. Etiam quis lectus lorem. Proin quis aliquet augue. Vestibulum dapibus commodo lorem, ut laoreet ligula lobortis sit amet.',
    stars: 4,
    createdAt: 1674372722892,
  },
  {
    id: 10,
    name: 'Cem',
    email: 'cem@gmail.com',
    content:
      'Quisque rutrum enim eget semper vestibulum. Etiam quis lectus lorem. Proin quis aliquet augue. Vestibulum dapibus commodo lorem, ut laoreet ligula lobortis sit amet.',
    stars: 4,
    createdAt: 1674372822892,
  },
  {
    id: 11,
    name: 'Taavi',
    email: 'taavi@gmail.com',
    content:
      'Praesent sagittis efficitur rhoncus. Praesent porta nibh ipsum. Nam viverra sollicitudin est quis vehicula. Praesent rutrum facilisis neque, efficitur dapibus ligula hendrerit vel.',
    stars: 2,
    createdAt: 1674372922892,
  },
  {
    id: 12,
    name: 'Taavet',
    email: 'taavet@gmail.com',
    content:
      'Praesent sagittis efficitur rhoncus. Praesent porta nibh ipsum. Nam viverra sollicitudin est quis vehicula. Praesent rutrum facilisis neque, efficitur dapibus ligula hendrerit vel.',
    stars: 2,
    createdAt: 1674373022892,
  },
  {
    id: 13,
    name: 'Ela',
    email: 'ela@gmail.com',
    content:
      'Praesent sagittis efficitur rhoncus. Praesent porta nibh ipsum. Nam viverra sollicitudin est quis vehicula. Praesent rutrum facilisis neque, efficitur dapibus ligula hendrerit vel.',
    stars: 1,
    createdAt: 1674373122892,
  },
  {
    id: 14,
    name: 'Tom',
    email: 'tom@gmail.com',
    content:
      'Praesent sagittis efficitur rhoncus. Praesent porta nibh ipsum. Nam viverra sollicitudin est quis vehicula. Praesent rutrum facilisis neque, efficitur dapibus ligula hendrerit vel.',
    stars: 5,
    createdAt: 1674373222892,
  },
];

export default comments;
