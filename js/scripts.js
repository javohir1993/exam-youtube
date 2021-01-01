var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};

var elGamburgerButton = $_('.js-site-header__hamburger-button');
var elMainContent = $_('.js-main-content');

elGamburgerButton.addEventListener('click', function () {
  elMainContent.classList.toggle('main-content--open')
});



var topChannelObjects = [
  {
    channelDemoTime: '4:15',
    channelDemoImg: 'img/brief-history.png',
    channelDemoImgRetina: 'img/brief-history@2x.png',
    channelDemoImgAlt: 'A Brief History Of Creation',
    channelDemoImgWidth: '250',
    channelDemoImgHeight: '150',
    channelItemHeading: 'A Brief History Of Creation',
    channelItemViews: '80k views',
    channelItemUploaded: '3 days ago',
    channelName: 'Dollie Blair'
  },

  {
    channelDemoTime: '8:00',
    channelDemoImg: 'img/hotel.png',
    channelDemoImgRetina: 'img/hotel@2x.png',
    channelDemoImgAlt: 'Selecting The Right Hotel',
    channelDemoImgWidth: '250',
    channelDemoImgHeight: '150',
    channelItemHeading: 'Selecting The Right Hotel',
    channelItemViews: '123k views',
    channelItemUploaded: '1 months ago',
    channelName: 'Dollie Blair'
  },

  {
    channelDemoTime: '5:32',
    channelDemoImg: 'img/asteroids.png',
    channelDemoImgRetina: 'img/asteroids@2x.png',
    channelDemoImgAlt: 'Asteroids',
    channelDemoImgWidth: '250',
    channelDemoImgHeight: '150',
    channelItemHeading: 'Asteroids',
    channelItemViews: '43k views',
    channelItemUploaded: '12 days ago',
    channelName: 'Dollie Blair'
  },

  {
    channelDemoTime: '6:40',
    channelDemoImg: 'img/telescopes.png',
    channelDemoImgRetina: 'img/telescopes@2x.png',
    channelDemoImgAlt: 'Telescopes 101',
    channelDemoImgWidth: '250',
    channelDemoImgHeight: '150',
    channelItemHeading: 'Telescopes 101',
    channelItemViews: '11k views',
    channelItemUploaded: '6 months ago',
    channelName: 'Dollie Blair'
  },

  {
    channelDemoTime: '1:45',
    channelDemoImg: 'img/medical-care.png',
    channelDemoImgRetina: 'img/medical-care@2x.png',
    channelDemoImgAlt: 'Medical Care Is Just',
    channelDemoImgWidth: '250',
    channelDemoImgHeight: '150',
    channelItemHeading: 'Medical Care Is Just',
    channelItemViews: '18k views',
    channelItemUploaded: '2 days ago',
    channelName: 'Dollie Blair'
  },

  {
    channelDemoTime: '2:12',
    channelDemoImg: 'img/moon-gazing.png',
    channelDemoImgRetina: 'img/moon-gazing@2x.png',
    channelDemoImgAlt: 'Moon Gazing',
    channelDemoImgWidth: '250',
    channelDemoImgHeight: '150',
    channelItemHeading: 'Moon gazing',
    channelItemViews: '67k views',
    channelItemUploaded: '4 months ago',
    channelName: 'Dollie Blair'
  }
]

var RecommendedObjects = [
  {
    recommendedDemoTime: '3:40',
    recommendedDemoImg: 'img/getting-telescopes.png',
    recommendedDemoImgRetina: 'img/getting-telescopes@2x.png',
    recommendedDemoImgAlt: 'Dude You Re Getting A Telescope',
    recommendedDemoImgWidth: '540',
    recommendedDemoImgHeight: '250',
    recommendedItemHeading: 'Dude You Re Getting A Telescope',
    recommendedItemViews: '34k views',
    recommendedItemUploaded: '5 month ago',
    recommendedName: 'Gussie French'
  },

  {
    recommendedDemoTime: '2:12',
    recommendedDemoImg: 'img/moon-gazing-big.png',
    recommendedDemoImgRetina: 'img/moon-gazing-big@2x.png',
    recommendedDemoImgAlt: 'Moon Gazing',
    recommendedDemoImgWidth: '540',
    recommendedDemoImgHeight: '250',
    recommendedItemHeading: 'Moon Gazing',
    recommendedItemViews: '54k views',
    recommendedItemUploaded: '11 month ago',
    recommendedName: 'Edward Osborne'
  },

  {
    recommendedDemoTime: '2:12',
    recommendedDemoImg: 'img/moon-gazing-girl.png',
    recommendedDemoImgRetina: 'img/moon-gazing-girl@2x.png',
    recommendedDemoImgAlt: 'Moon Gazing',
    recommendedDemoImgWidth: '540',
    recommendedDemoImgHeight: '250',
    recommendedItemHeading: 'Moon Gazing',
    recommendedItemViews: '125k views',
    recommendedItemUploaded: '4 month ago',
    recommendedName: 'Dollie Blair'
  }
]

var bottomChannelObjects = [
  {
    channelDemoTime: '7:35',
    channelDemoImg: 'img/astronomy.png',
    channelDemoImgRetina: 'img/astronomy@2x.png',
    channelDemoImgAlt: 'Astronomy Or Astrology',
    channelDemoImgWidth: '250',
    channelDemoImgHeight: '150',
    channelItemHeading: 'Astronomy Or Astrology',
    channelItemViews: '240k views',
    channelItemUploaded: '4 months ago',
    channelName: 'Food & Drink'
  },

  {
    channelDemoTime: '2:19',
    channelDemoImg: 'img/outdoors.png',
    channelDemoImgRetina: 'img/outdoors@2x.png',
    channelDemoImgAlt: 'Advertising Outdoors',
    channelDemoImgWidth: '250',
    channelDemoImgHeight: '150',
    channelItemHeading: 'Advertising Outdoors',
    channelItemViews: '13k views',
    channelItemUploaded: '15 days ago',
    channelName: 'Food & Drink'
  },

  {
    channelDemoTime: '9:05',
    channelDemoImg: 'img/radio-astronomy.png',
    channelDemoImgRetina: 'img/radio-astronomy@2x.png',
    channelDemoImgAlt: 'Advertising Outdoors',
    channelDemoImgWidth: '250',
    channelDemoImgHeight: '150',
    channelItemHeading: 'Advertising Outdoors',
    channelItemViews: '1k views',
    channelItemUploaded: '11 months ago',
    channelName: 'Food & Drink'
  },

  {
    channelDemoTime: '3:40',
    channelDemoImg: 'img/autoresponded.png',
    channelDemoImgRetina: 'img/autoresponded@2x.png',
    channelDemoImgAlt: 'A Good Autoresponder',
    channelDemoImgWidth: '250',
    channelDemoImgHeight: '150',
    channelItemHeading: 'A Good Autoresponder',
    channelItemViews: '45k views',
    channelItemUploaded: '2 months ago',
    channelName: 'Food & Drink'
  },

  {
    channelDemoTime: '1:56',
    channelDemoImg: 'img/monitoring-technology.png',
    channelDemoImgRetina: 'img/monitoring-technology@2x.png',
    channelDemoImgAlt: 'Baby Monitor Technology',
    channelDemoImgWidth: '250',
    channelDemoImgHeight: '150',
    channelItemHeading: 'Baby Monitor Technology',
    channelItemViews: '86k views',
    channelItemUploaded: '7 days ago',
    channelName: 'Food & Drink'
  },

  {
    channelDemoTime: '4:15',
    channelDemoImg: 'img/watermelon.png',
    channelDemoImgRetina: 'img/watermelon@2x.png',
    channelDemoImgAlt: 'Asteroids',
    channelDemoImgWidth: '250',
    channelDemoImgHeight: '150',
    channelItemHeading: 'Asteroids',
    channelItemViews: '123k views',
    channelItemUploaded: '4 months ago',
    channelName: 'Dollie Blair'
  }
]


var elTopChannelTemplate = $_('.top-channel-template').content;

var elTopChannelObjectFragment = document.createDocumentFragment();

topChannelObjects.forEach (function (topChannelObject) {
  var elTopChannelVideoItem = elTopChannelTemplate.cloneNode(true);

  $_('.js-channel__demo-time', elTopChannelVideoItem).textContent = topChannelObject.channelDemoTime;
  $_('.js-channel__demo-img', elTopChannelVideoItem).src = topChannelObject.channelDemoImg;
  $_('.js-channel__demo-img', elTopChannelVideoItem).srcset = `${topChannelObject.channelDemoImg} 1x, ${topChannelObject.channelDemoImgRetina} 2x`;
  $_('.js-channel__demo-img', elTopChannelVideoItem).alt = topChannelObject.channelDemoImgAlt;
  $_('.js-channel__demo-img', elTopChannelVideoItem).width = topChannelObject.channelDemoImgWidth;
  $_('.js-channel__demo-img', elTopChannelVideoItem).height = topChannelObject.channelDemoImgHeight;
  $_('.js-channel__item-heading', elTopChannelVideoItem).textContent = topChannelObject.channelItemHeading;
  $_('.js-channel__item-views', elTopChannelVideoItem).textContent = topChannelObject.channelItemViews;
  $_('.js-channel__item-uploaded', elTopChannelVideoItem).textContent = topChannelObject.channelItemUploaded;
  $_('.js-channel__name', elTopChannelVideoItem).textContent = topChannelObject.channelName;

  elTopChannelObjectFragment.appendChild(elTopChannelVideoItem);
});

$_('.js-channel__list').appendChild(elTopChannelObjectFragment);


var elRecommendedTemplate = $_('.recommended-template').content;

var elRecommendedFragment = document.createDocumentFragment();

RecommendedObjects.forEach(function (recommendedObject) {
  var recommendedVideoItem = elRecommendedTemplate.cloneNode(true);

  $_('.js-recommended__demo-time', recommendedVideoItem).textContent = recommendedObject.recommendedDemoTime;
  $_('.js-recommended__demo-img', recommendedVideoItem).src = recommendedObject.recommendedDemoImg;
  $_('.js-recommended__demo-img', recommendedVideoItem).srcset = `${recommendedObject.recommendedDemoImg} 1x, ${recommendedObject.recommendedDemoImgRetina} 2x`;
  $_('.js-recommended__demo-img', recommendedVideoItem).alt = recommendedObject.recommendedDemoImgAlt;
  $_('.js-recommended__demo-img', recommendedVideoItem).width = recommendedObject.recommendedDemoImgWidth;
  $_('.js-recommended__demo-img', recommendedVideoItem).height = recommendedObject.recommendedDemoImgHeight;
  $_('.js-recommended__item-heading', recommendedVideoItem).textContent = recommendedObject.recommendedItemHeading;
  $_('.js-recommended__item-views', recommendedVideoItem).textContent = recommendedObject.recommendedItemViews;
  $_('.js-recommended__item-uploaded', recommendedVideoItem).textContent = recommendedObject.recommendedItemUploaded;
  $_('.js-recommended__name', recommendedVideoItem).textContent = recommendedObject.recommendedName;

  elRecommendedFragment.appendChild(recommendedVideoItem);
});

$_('.js-recommended__list').appendChild(elRecommendedFragment);


var elBottomChannelTemplate = $_('.bottom-channel-template').content;

var elBottomChannelObjectFragment = document.createDocumentFragment();

bottomChannelObjects.forEach (function (bottomChannelObject) {
  var elBottomChannelVideoItem = elBottomChannelTemplate.cloneNode(true);

  $_('.js-channel__demo-time', elBottomChannelVideoItem).textContent = bottomChannelObject.channelDemoTime;
  $_('.js-channel__demo-img', elBottomChannelVideoItem).src = bottomChannelObject.channelDemoImg;
  $_('.js-channel__demo-img', elBottomChannelVideoItem).srcset = `${bottomChannelObject.channelDemoImg} 1x, ${bottomChannelObject.channelDemoImgRetina} 2x`;
  $_('.js-channel__demo-img', elBottomChannelVideoItem).alt = bottomChannelObject.channelDemoImgAlt;
  $_('.js-channel__demo-img', elBottomChannelVideoItem).width = bottomChannelObject.channelDemoImgWidth;
  $_('.js-channel__demo-img', elBottomChannelVideoItem).height = bottomChannelObject.channelDemoImgHeight;
  $_('.js-channel__item-heading', elBottomChannelVideoItem).textContent = bottomChannelObject.channelItemHeading;
  $_('.js-channel__item-views', elBottomChannelVideoItem).textContent = bottomChannelObject.channelItemViews;
  $_('.js-channel__item-uploaded', elBottomChannelVideoItem).textContent = bottomChannelObject.channelItemUploaded;
  $_('.js-channel__name', elBottomChannelVideoItem).textContent = bottomChannelObject.channelName;

  elBottomChannelObjectFragment.appendChild(elBottomChannelVideoItem);
});

$_('.js-channel__recommended-list').appendChild(elBottomChannelObjectFragment);