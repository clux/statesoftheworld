// direct from http://en.wikipedia.org/wiki/List_of_sovereign_states
// February 2013
var states = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burma',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Columbia',
  'Comoros',
  'Congo, Democratic Republic of the',
  'Congo, Republic of the',
  'Costa Rica',
  'Cote d\'Ivoire',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia, Federated States of',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papau New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Aurabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];


// obj of state name -> used name (when they are not identical)
var substitute = {
  // republics listed together to save writing Republic of X times 4
  'Central African Republic' : 'Central African',
  'Congo, Democratic Republic of the' : 'Republics: of',
  'Congo, Republic of the' : 'Congos',
  'Czech Republic' : 'Czech',

  // koreas (listed together as one)
  'Korea, North' : 'Korea',
  'Korea, South' : 'North/South',

  // misc tiny tweaks and silent joiners
  'Antigua and Barbuda' : 'Antigua (&) Barbuda',
  'Dominican Republic' : 'Republic Dominican',
  'Marshall Islands' : 'Marshalls',
  'Micronesia, Federated States of' : 'Micronesia',
  'Netherlands' : 'The Netherlands',
  'Philippines' : 'The Philippines',
  'Saint Vincent and the Grenadines' : 'Saint Vincent (and the) Grenadines',
  'Sao Tome and Principe' : 'Sao Tome (and) Principie',
  'Solomon Islands' : 'the Solomon Islands',
  'Trinidad and Tobago' : 'Trinidad & Tobago',
  'United Arab Emirates': 'Emirates United'
};

var str = require('./');
var test = require('tap').test;

test("correct states", function (t) {
  states.forEach(function (state) {
    var sub = substitute[state] || state;
    // find the right use of the substring and replace it
    var indices = [];
    for (var idx = str.indexOf(sub, 0); idx >= 0; idx = str.indexOf(sub, idx+1)) {
      indices.push(idx);
      //console.log('found', str.slice(idx, idx + sub.length), 'for', sub);
    }
    // can sometimes have >1 hit, if so take the first hit that:
    // has whitespace or commas on either side of the match (sufficient atm)
    var whiteReg = /[\s,\.\,]/;
    var i;
    if (indices.length > 0) {
      for (var k = 0; k < indices.length; k += 1) {
        var foundIdx = indices[k];
        var preChar = str[foundIdx-1] || ' '; // could be first character
        var afterChar = str[foundIdx + sub.length] || ' '; // could be last character
        if (whiteReg.test(preChar) && whiteReg.test(afterChar)) {
          i = foundIdx;
        }
      }
    }

    if (i === undefined || i < 0) {
      t.ok(false, sub + " not found!");
    }
    else {
      t.ok(true, sub + " found");
      // splice out sub
      //console.log('removing:', str.slice(i, i+sub.length));
      str = str.slice(0, i) + str.slice(i + sub.length);
    }
  });
  str = str.replace(/[\s\,\.]/g, '')  // whitespace and punctuation
           .replace(/and/g, '')       // misc. filler words
           .replace(/still/g, '')
           .replace(/then/g, '')
           .replace(/now/g, '')
           .replace(/too/g, '')
           .replace(/There's/, '')
           .replace(/[\&\(\)\-]/g, ''); // remaining separators
  t.equal(str, "", "No leftovers");
  t.end();
});

