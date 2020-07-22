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
      name: "og:title",
      content: p.title
    });
  }
  if(p.description){
    metaArray.push({
      hid: "og:description" ,
      name: "og:description",
      content: p.description
    });
  }
  if(p.type){
    metaArray.push({
      hid: "og:type" ,
      name: "og:type",
      content: p.type
    });
  }
  if(p.site_name){
    metaArray.push({
      hid: "og:site_name" ,
      name: "og:site_name",
      content: p.site_name
    });
  }
  if(p.locale){
    metaArray.push({
      hid: "og:locale" ,
      name: "og:locale",
      content: p.locale
    });
  }
  if(p.image){
    metaArray.push({
      hid: "og:image" ,
      name: "og:image",
      content: p.image.url
    });
    metaArray.push({
      hid: "og:image:alt" ,
      name: "og:image:alt",
      content: p.image.alt
    });
  }
  return metaArray
}
