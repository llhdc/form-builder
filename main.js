// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];



// -------- Your Code Goes Below this Line --------

function createInput(data) {

}


formData.forEach(function(fieldData) {


  // let fields = document.getElementById('fields')
  let input = document.createElement('input');

  if (fieldData.type === 'textarea') {
    console.log('textarea');
    let textarea = document.createElement('textarea');
    textarea.setAttribute('placeholder',fieldData.label);
    textarea.setAttribute('id', fieldData.id);
    fields.appendChild(textarea);
  } else if (fieldData.type === 'select') {
    console.log('select');
    let select = document.createElement('select');
    select.setAttribute('placeholder', fieldData.label);
    select.setAttribute('id', fieldData.id);

    fieldData.options.forEach(function(optionData) {
      console.log(optionData);
      let option = document.createElement('option');
      option.setAttribute('value', optionData.value);
      option.setAttribute('label', optionData.label);
      select.appendChild(option);
    });

    fields.appendChild(select);
  } else {
    input.setAttribute('type', fieldData.type);
    input.setAttribute('placeholder', fieldData.label);
    input.setAttribute('id', fieldData.id);
  }
    // textarea.setAttribute('type', 'textarea');
    // textarea.setAttribute('placeholder', fieldData.label);
    // textarea.setAttribute('id', fieldData.id);

  fields.appendChild(input);

});

// let item = formData[]
// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// input.setAttribute('placeholder', 'First Name');
// input.setAttribute('id', 'user-first-name')
//
// fields.appendChild(input)
//
// let input = document.createElement('input');
// input.setAttribute('type', 'email');
// input.setAttribute('placeholder', 'Email Address');
// input.setAttribute('id', 'user-email')
//
// fields.appendChild(input)


// {
//   "type": "text",
//   "label": "First Name",
//   "id": "user-first-name",
//   "icon": "fa-user",
//   "options": []
// }

//     <input type="text" id="user-first-name" placeholder="First Name">
