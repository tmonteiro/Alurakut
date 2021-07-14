import * as React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import ProfileReations from '../src/components/ProfileRelations';
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from '../src/components/lib/AlurakutCommons';

function ProfileSideBar({ gitHubUser }) {
  return (
    <Box>
      <img
        style={{ borderRadius: 8 }}
        src={`https://github.com/${gitHubUser}.png`}
      />
      <hr />
      <a className="boxLink" href={`https://github.com/${gitHubUser}`}>
        @{gitHubUser}
      </a>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const [communities, setCommunities] = React.useState([]);
  const gitHubUser = 'tmonteiro';
  const friends = [
    'ricardomattos',
    'ggdaltoso',
    'tannerlinsley',
    'kentcdodds',
    'wesbos',
  ];

  const handleFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCommunity = {
      id: new Date().toISOString(),
      title: formData.get('title'),
      image: formData.get('image'),
    };
    setCommunities(prev => [...prev, newCommunity]);
  };

  return (
    <>
      <AlurakutMenu githubUser={gitHubUser} />
      <MainGrid>
        <aside className="profileArea">
          <ProfileSideBar gitHubUser={gitHubUser} />
        </aside>
        <div>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer hoje?</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                name="title"
                type="text"
                aria-label="Qual o nome da sua comunidade?"
                placeholder="Qual o nome da sua comunidade?"
              />
              <input
                name="image"
                type="text"
                aria-label="Coloque uma url para usarmos de capa"
                placeholder="Coloque uma url para usarmos de capa"
              />
              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div>
          <ProfileReations title="Amigos" data={friends} />
          <ProfileReations title="Comunidades" data={communities} />
        </div>
      </MainGrid>
    </>
  );
}
