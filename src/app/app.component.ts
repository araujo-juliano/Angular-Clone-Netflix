import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpened = false;

  listTitlesFavorite:any = [{
    trailer: 'assets/videos/Favorite/Avatar.mp4',
    cover: 'https://ovicio.com.br/wp-content/uploads/2022/05/20220526-ovicio-avatar-netflix.jpg',
    name: 'A Lenda de Aang',
    relevance: 98,
    age: 0,
    parts: 1,
    categories: ['Épico', 'Filme de Fantasia', 'Séries baseadas em HQ']
  },
  {
    trailer: 'assets/videos/Favorite/Caes.mp4',
    cover: 'https://i.ytimg.com/vi/ZT5ngtIlqW8/maxresdefault.jpg',
    name: 'Cães de Caça',
    relevance: 80,
    age: 16,
    parts: 1,
    categories: ['Ação', 'Boxe']
  },
  {
    trailer: 'assets/videos/Favorite/Ragnarok.mp4',
    cover: 'https://nerdlicious.com.br/wp-content/uploads/2021/05/2-temporada-ragnarok-netflix-analise-1.jpg',
    name: 'Ragnarok',
    relevance: 80,
    age: 14,
    parts: 3,
    categories: ['Drama', 'Mitologia']
  },
  {
    trailer: 'assets/videos/Favorite/Umbrella.mp4',
    cover: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/02/The-Umbrella-Academy-696x391.jpg',
    name: 'The Umbrella Academy',
    relevance: 90,
    age: 16,
    parts: 3,
    categories: ['Ação']
  }
  ]

  listTitlesMovies:any = [{
    trailer: 'assets/videos/Movies/Leo.mp4',
    cover: 'https://static1.squarespace.com/static/63bb3e8a824d7e2f7eedf0d3/64ac424fcaadf8324a193593/64e605d8305a6e23602b129c/1692796921516/Leo.jpg?format=1500w',
    name: 'LEO',
    relevance: 98,
    age: 0,
    parts: 1,
    categories: ['Comédia', 'Filme Infatil']
  },
  {
    trailer: 'assets/videos/Movies/Enola.mp4',
    cover: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/enola-holmes-recap.jpg',
    name: 'Enola Holmes 2',
    relevance: 80,
    age: 12,
    parts: 2,
    categories: ['Drama', 'Filme de Mistério', 'Obras de Época']
  },
  {
    trailer: 'assets/videos/Movies/Pinoquio.mp4',
    cover: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/pinoquio.jpeg?w=1200&h=900&crop=1',
    name: 'Pinoquio',
    relevance: 80,
    age: 12,
    parts: 1,
    categories: ['Filme para chorar', 'Filme de Fantasia']
  },
  {
    trailer: 'assets/videos/Movies/NãoOlhe.mp4',
    cover: 'https://noticiasetecnologia.com/wp-content/uploads/2021/12/Nao-olhem-para-cima-1.jpg',
    name: 'Não Olhe Para Cima',
    relevance: 90,
    age: 16,
    parts: 1,
    categories: ['Comédia', 'Filmes de ficção científica']
  },
  ]

  listTitlesSeries:any = [{
    trailer: 'assets/videos/Series/Cacadores.mp4',
    cover: 'https://paogeekeijo.com/wp-content/uploads/2022/03/cacadores-de-demonios.jpg',
    name: 'Caçadores de Demônios',
    relevance: 98,
    age: 16,
    parts: 2,
    categories: ['Ação', 'Série Coreana']
  },
  {
    trailer: 'assets/videos/Series/Elite.mp4',
    cover: 'https://s3-sa-east-1.amazonaws.com/midia.livrosecitacoes.com/wp-content/uploads/2020/02/13162438/elite.jpg',
    name: 'Elite - 7ª Temporada',
    relevance: 70,
    age: 18,
    parts: 7,
    categories: ['Drama', 'Série Teen']
  },
  {
    trailer: 'assets/videos/Series/OnePiece.mp4',
    cover: 'https://cafecomnerd.com.br/wp-content/uploads/2023/09/One-Piece-Segunda-Temporada-Netflix-renovou-a-sequencia-da-serie-baseada-no-mang-de-Eiichiro-Oda.jpg',
    name: 'One Piece: A Série',
    relevance: 98,
    age: 16,
    parts: 1,
    categories: ['Ação', 'Séries baseadas em mangá']
  },
  {
    trailer: 'assets/videos/Series/Lupin.mp4',
    cover: 'https://tm.ibxk.com.br/sites/6/2021/05/609aebb2ec664.jpg',
    name: 'Lupin',
    relevance: 80,
    age: 16,
    parts: 3,
    categories: ['Drana', 'Franceses']
  },
  ]

  listTitlesAnimes:any = [{
    trailer: 'assets/videos/Animes/Shaman.mp4',
    cover: 'https://www.animesxis.com.br/wp-content/uploads/2022/04/Shaman-King-sequencia-visual-01.jpg',
    name: 'Shaman King',
    relevance: 85,
    age: 12,
    parts: 1,
    categories: ['Animes de ação', 'Animes Shounen']
  },
  {
    trailer: 'assets/videos/Animes/Demon.mp4',
    cover: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEir6ElVTHf8mItdPAU0epcGOoR2R-z2UOqB9TqkeWFlS-us45Thz3M1ozFa4fRGLkWpdXhB2kG0xb4FypHCTWLRHm4oro5K690fyJg_JM0E1NxYIKYiSNoxHUoSfhYgox3pTvD_Y2wuvG_NAlEvj34Dh5HzQ-0AFXya1rWfDPpjXlw7cHY-MAaXrgl2kA/s640/Demon-Slayer-To-the-Swordsmith-Village-World-Tour-evento-Ciudad-de-Mexico.jpg',
    name: 'Demon Slayer',
    relevance: 90,
    age: 16,
    parts: 3,
    categories: ['Animação', 'Animes Shounen', 'Ação']
  },
  {
    trailer: 'assets/videos/Animes/Naruto.mp4',
    cover: 'https://www.ilbazardimari.net/wp-content/uploads/c2115.jpg',
    name: 'Naruto',
    relevance: 80,
    age: 14,
    parts: 9,
    categories: ['Animes de ação', 'Animes Shounen']
  },
  ]

setMenuState(state: boolean){
  this.menuOpened = state;
}

closeMenu(){
  this.menuOpened = false;
}
}
