var drop = document.querySelector('.drop');
var btn = document.getElementById('burg');
burg.addEventListener('click', revelarMenu);

function revelarMenu() {
	drop.classList.toggle('hidden');
}

const ArtigoUm = {
	template:
		"<div class='bg-white p-4 py-8 lg:pt-0 lg:ml-4'><h3 class='text-xl font-bold text-green-400 my-4 lg:mt-0'>O que são as arritmias cardíacas?</h3><p class='my-4'>As arritmias cardíacas são situações em que o batimento cardíaco se apresenta irregular, acelerado ou lentificado. De forma descritiva, as diversas classes de arritmias podem ser descritas abaixo:</p><ol class='my-4 px-12 list-decimal'><li class='py-2'>Bradicardia – batimento lento</li><li class='py-2'>Taquicardia - batimento acelerado</li><li class='py-2'>Batimento irregular (como na Fibrilação atrial, por exemplo.)</li><li class='py-2'>Batimento prematuro (extra-sístoles)</li></ol><p class='my-4'>A maioria das arritmias diagnosticadas é de baixo risco cardiovascular. No entanto, alguns casos especificos podem trazer maiores riscos e necessitam de tratamento específico. A avaliação do especialista em arritmias nestes casos, é fundamental.</p></div>"
};

const ArtigoDois = {
	template:
		"<div class='bg-white p-4 py-8 lg:pt-0 lg:ml-4'><h3 class='text-xl font-bold text-green-400 my-4 lg:mt-0'>O que pode causar arritmias?</h3><p class='my-4'>Muitas causas potenciais podem contribuir para um mal funcionamento do ritmo cardíaco:</p><ul class='my-4 px-12 list-disc'><li class='py-2'>abuso de álcool ou outros tóxicos</li><li class='py-2'>diabetes</li><li class='py-2'>Abuso de cafeína</li><li class='py-2'>Doenças cardíacas estruturais prévias</li><li class='py-2'>Hipertensão arterial</li><li class='py-2'>Hiper e Hipotireoidismo</li><li class='py-2'>Stress mental</li><li class='py-2'>Suplementos alimentares inadequados</li><li class='py-2'>Tabagismo</li><li class='py-2'>Alterações genéticas</li></ul></div>"
};

const ArtigoTres = {
	template:
		"<div class='bg-white p-4 py-8 lg:pt-0 lg:ml-4'><h3 class='text-xl font-bold text-green-400 my-4 lg:mt-0'>Quais são os principais tratamentos das arritmias cardíacas?</h3><p class='my-4'>O tratamento das arritmias tem 3 componentes principais:</p><ol class='my-4 px-12 list-decimal'><li class='py-2'>Mudanças alimentares e comportamentais- evitar abuso de alcool, drogas e cafeína. Evitar/cessar o tabagismo. Evitar sobrepeso, stress mental.</li><li class='py-2'>Medicamentos- existem várias classes de medicamentos anti-arrítmicos que podem ser usadas nos diferentes perfis de pacientes e nas diversas arritmias conhecidas. A escolha da medicação mais adequada em cada situação deve ser analisada em detalhe pelo especialista.</li><li class='py-2'>Procedimentos invasivos. Algumas arritmias podem ser diagnosticadas e tratadas através de procedimentos por cateter (chamados Estudo Eletrofisiológico e Ablação).</li></ol></div>"
};

const ArtigoQuatro = {
	template:
		"<div class='bg-white p-4 py-8 lg:pt-0 lg:ml-4'><h3 class='text-xl font-bold text-green-400 my-4 lg:mt-0'>Em que casos a Ablação está indicada?</h3><p class='my-4'>A ablação é um procedimento invasivo por cateter, geralmente indicado de forma eletiva. Pacientes portadores de arritmias com sintomas ou riscos significativos são candidatos a esta forma de tratamento. Na maioria das vezes o procedimentos é realizado sob sedação ou anestesia, nã0 trazendo desconforto ao paciente. As principais arritmias tratadas com este método na prática clínica são as taquicardias supraventriculares, as extra-sístoles e a Fibrilação Atrial.</p></div>"
};

const Links = {
	template:
		"<div class='bg-white p-4 py-8 lg:pt-0 lg:ml-4'><h3 class='text-xl font-bold text-green-400 my-4 lg:mt-0'>Artigos acadêmicos</h3><ul class='my-4 px-12'><a href='http://www.scielo.br/scielo.php?pid=S0104-42302011000300001&script=sci_arttext'><li class='py-2 cursor-pointer hover:text-green-500 hover:underline'>O coração do atleta e a busca incessante de fatores de previsão</li></a><a href='https://academic.oup.com/europace/article/13/8/1141/515357'><li class='py-2 cursor-pointer hover:text-green-500 hover:underline'>Características espectrais de eletrogramas atriais em ritmo sinusal se correlacionam com sítios de plexos ganglionares em pacientes com fibrilação atrial paroxística</li></a><a href='https://www.ahajournals.org/doi/full/10.1161/CIRCEP.116.004638?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed'><li class='py-2 cursor-pointer hover:text-green-500 hover:underline'>Alvos e pontos definitivos em Procedimentos de Denervação Autônoma Cardíaca</li></a></ul></div>"
};

const routes = {
	0: ArtigoUm,
	1: ArtigoDois,
	2: ArtigoTres,
	3: ArtigoQuatro,
	4: Links
};

var galeria = new Vue({
	el: '#galeria',
	data: {
		images: [ 'imgs/2.jpg', 'imgs/3.jpg', 'imgs/4.jpg', 'imgs/5.jpg' ],
		currentNumber: 0,
		timer: null
	},

	mounted: function() {
		this.startRotation();
	},

	methods: {
		startRotation: function() {
			this.timer = setInterval(this.next, 3000);
		},

		stopRotation: function() {
			clearTimeout(this.timer);
			this.timer = null;
		},

		next: function() {
			this.currentNumber += 1;
		},
		prev: function() {
			this.currentNumber -= 1;
		}
	},

	computed: {
		currentImage: function() {
			return this.images[Math.abs(this.currentNumber) % this.images.length];
		}
	}
});

var artigos = new Vue({
	el: '#artigos',
	data: {
		currentRoute: 0
	},
	components: { conteudo }
});

var conteudo = new Vue({
	el: '#conteudo',
	computed: {
		ViewComponent() {
			return routes[artigos.currentRoute] || NotFound;
		}
	},
	render(h) {
		return h(this.ViewComponent);
	}
});
