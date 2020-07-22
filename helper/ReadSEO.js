export default function (body) {
  let metaArray = [];
  body.forEach(tab => {
    if(tab.slice_type === 'general_card'){
      metaArray = metaArray.concat(GeneralCardToMetaArray(tab));
    }
  });
  return metaArray;
}


function GeneralCardToMetaArray(tab){
  const metaArray = [];
  const p = tab.primary;
  if(p.title){
    metaArray.push({
      hid: "og:title" ,
      property: "og:title",
      content: p.title
    });
  }
  if(p.description){
    metaArray.push({
      hid: "og:description" ,
      property: "og:description",
      content: p.description
    });
  }
  if(p.type){
    metaArray.push({
      hid: "og:type" ,
      property: "og:type",
      content: p.type
    });
  }
  if(p.site_name){
    metaArray.push({
      hid: "og:site_name" ,
      property: "og:site_name",
      content: p.site_name
    });
  }
  if(p.url){
    metaArray.push({
      hid: "og:url" ,
      property: "og:url",
      content: p.url
    });
  }
  if(p.locale){
    metaArray.push({
      hid: "og:locale" ,
      property: "og:locale",
      content: p.locale
    });
  }
  if(p.image){
    metaArray.push({
      hid: "og:image" ,
      property: "og:image",
      content: p.image.url
    });
    metaArray.push({
      hid: "og:image:alt" ,
      property: "og:image:alt",
      content: p.image.alt
    });
  }
  return metaArray
}
