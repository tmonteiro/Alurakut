import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from '../src/components/lib/AlurakutCommons';

function ProfileSideBar({ gitHubUser }) {
  return (
    <Box>
      <img
        style={{ borderRadius: 8 }}
        src={`https://github.com/${gitHubUser}.png`}
      />
    </Box>
  );
}

export default function Home() {
  const gitHubUser = 'tmonteiro';
  const friends = [
    'ricardomattos',
    'ggdaltoso',
    'tannerlinsley',
    'kentcdodds',
    'wesbos',
  ];
  return (
    <>
      <AlurakutMenu githubUser={gitHubUser} />
      <MainGrid>
        <div className="profileArea">
          <ProfileSideBar gitHubUser={gitHubUser} />
        </div>
        <div>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({friends.length})</h2>
            <ul>
              {friends.map(friend => (
                <li key={friend}>
                  <a href={`/users/${friend}`}>
                    <img src={`https://github.com/${friend}.png`} />
                    <span>{friend}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
