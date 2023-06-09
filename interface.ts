export interface News{
    img: string,
    title: string,
    by: string,
    description: string,
    id: string,
}
export interface AddInputNews{
    img: string,
    title: string,
    by: string,
    description: string,
}
export interface UpdateInputNews{
  id: string;
  img: string,
  title: string,
  by: string,
  description: string,
}
const newList = [
  {
      "img": "assets/images/news1.jpg",
      "title": "5 Reasons Why Even This DCEU Hater Is Pumped For The New Flash Movie",
      "by": "Rich Knight",
      "description": "Without being hyperbolic, I think the DCEU (and more specifically the Snyderverse) is the worst thing to ever happen to DC in the entirety of its nearly 90 year run. I wrote an article last year about five good things that I could actually say about the Snyderverse, but spent a portion of that article dancing on the grave of the failed extended universe.",
      "id": "1"
  },
  {
      "img": "assets/images/news2.jpg",
      "title": "Every Hybrid 2D/3D Animated Movie, Ranked According To Rotten Tomatoes",
      "by": "Brandon McClure",
      "description": "There are moments in film history that change the way movies are made forever. In animation, one such moment was Toy Story which led to Shrek and then Tangled. Each of those movies were pioneers in 3D animation. The goal of 3D animation was to reach a type of realism within animation. Then another moment happened when Spider-Man: Into The Spider-Verse was released.",
      "id": "2"
  },
  {
      "img": "assets/images/news3.jpg",
      "title": "'Ant-Man and the Wasp': Quantum: Disgusting MODOK Is the Best Part of the Movie",
      "by": "Allegra Frank",
      "description": "The premise of Ant-Man and the Wasp: Quantumania is pretty straightforward: It’s Star Wars meets Rick and Morty meets Marvel’s least-interesting superhero franchise. Aliens that look all weird! Spaceships! Gigantic ants! Horndog old dudes! The personification of evil facing off against the personification of good!",
      "id": "3"
  },
  {
      "img": "assets/images/news4.jpg",
      "title": "Great Family Movie Picks for Family Movie Night",
      "by": "Desiree DeNunzio",
      "description": "Family movie night is a great way to gather around and wind down after a frenzied week. Curling up on the couch together to watch a family comedy is an easy way to relax and stay connected.",
      "id": "4"
  },
  {
      "img": "assets/images/news5.jpg",
      "title": "'The Super Mario Bros': Movie Is One of the Shortest Video Game Films Ever",
      "by": "Isaac Burnett",
      "description": "The upcoming Super Mario Bros. Movie will offer audiences a shorter story than many other video game adaptations. The length of the film was confirmed to be approximately 92 minutes. The runtime was revealed on the film's official page on the Irish Film Classification Office, as reported by Collider. Most video game adaptations, especially those in recent years, have leaned towards longer running times of 100-120 minutes, but it appears Super Mario Bros. will opt for a more concise approach.",
      "id": "5"
  },
  {
      "img": "assets/images/news6.jpg",
      "title": "New Hellboy Movie Confirmed, With Mike Mignola Writing",
      "by": "RYAN O'ROURKE",
      "description": "Rumors spread earlier this week, and now Deadline has confirmed: Millennium Media will make a new Hellboy movie. It’s an interesting choice, given that the last Hellboy movie failed at the box office with star David Harbour (probably correctly) noting that fans seem too attached to Guillermo del Toro and Ron Perlman’s version to accept a new take.",
      "id": "6"
  },
  {
      "img": "assets/images/news7.jpg",
      "title": "'Shazam! Fury of the Gods' Runtime Revealed",
      "by": "SAFEEYAH KAZI",
      "description": "The countdown is on until DC's favorite champion makes a timely return to theaters in Shazam! Fury of the Gods. Ahead of the film's release, Collider has learned that the superhero sequel's runtime is set to clock in at 2 hours and 10 minutes, just two minutes shorter than its predecessor.",
      "id": "7"
  },
  {
      "img": "assets/images/news8.jpg",
      "title": "'John Wick: Chapter 4': Keanu Reeves on Epic Arc De Triomphe Stunt Sequence",
      "by": "SHRISHTY",
      "description": "The marketing for John Wick: Chapter 4 has turned up the full throttle as the March release of the movie approaches. We got the final trailer for the feature which showcases old friends and new adversaries and a very adorable dog turning up to help John. For IGN’s Fan Fest Keanu Reeves shared a new behind-the-scenes clip and promised some high-octane action sequences.",
      "id": "8"
  },
  {
      "img": "assets/images/news9.jpg",
      "title": "'Avatar: The Way of Water' Wins Big at 2023 Visual Effects Society Awards",
      "by": "ERICK MASSOTO",
      "description": "Today, the Visual Effects Society (VES) announced the winners of their annual award that celebrates VFX excellence across all platforms. The event gathered industry professionals and guests at the Beverly Hilton Hotel in a ceremony hosted by Patton Oswalt (The Sandman) — who has em-cee’d the event a whopping ten times. Avatar: The Way of Water director James Cameron also took the stage to present a Lifetime Achievement Award to acclaimed producer Gale Ann Hurd.",
      "id": "9"
  },
  {
      "img": "assets/images/news10.jpg",
      "by": "SHANE ROMANCHICK",
      "title": "'Scream VI' Subway Promo Teases the End of the Line for Fan-Favorite Survivors",
      "description": "Scream VI is just weeks away from its highly anticipated release. There’s been so much build up among the Scream fan base surrounding this new blood-soaked adventure and the film’s fun marketing campaign, focused on the New York City backdrop, has only made the wait for this slasher sequel even harder. Now the latest promo for Scream VI teases this may be the last stop for some of our fan-favorite characters.",
      "id": "10"
  }
]