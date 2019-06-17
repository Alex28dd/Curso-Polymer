const div = (srt) => {
  let pars = (srt.match(/.{1,2}/g));

  if(pars[pars.length-1].length%2 !== 0) {
		pars[pars.length-1]+= "_"
	}

  return pars;
}
 console.log(div('abcdefhij'));
