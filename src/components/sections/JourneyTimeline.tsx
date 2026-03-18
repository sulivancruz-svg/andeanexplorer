import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Check, Users } from 'lucide-react';
import raqchiImg from '@/assets/raqchi.jpg';
import taquileImg from '@/assets/taquile.jpg';
import nascerSolImg from '@/assets/nascer-sol-saracocha.jpeg';

const days = [
{
  day: 'Dia 1',
  title: 'Cusco',
  location: 'Cusco → La Raya → Lago Titicaca',
  image: raqchiImg,
  paragraphs: [
  'O embarque é em Cusco, antiga capital do Império Inca. Você se acomoda na cabine enquanto o trem inicia o trajeto em direção a Puno.',
  'O almoço já acontece a bordo, com pratos que valorizam ingredientes locais, bem executados e servidos com cuidado.',
  'Ao longo do dia, há uma parada em Raqch\'i, um importante sítio arqueológico Inca. Na sequência, o percurso passa pela cordilheira de La Raya, um dos pontos mais altos da rota.',
  'À noite, jantar a bordo e tempo livre para aproveitar o trem. O pernoite acontece próximo ao Lago Titicaca.']

},
{
  day: 'Dia 2',
  title: 'Puno e Lago Titicaca',
  location: 'Lago Titicaca → Uros → Taquile → Sacacoha',
  image: taquileImg,
  paragraphs: [
  'O dia começa com café da manhã a bordo, seguido de um passeio até as ilhas dos Uros. Um lugar simples e impressionante, construído com juncos e mantido até hoje pelos próprios moradores.',
  'Depois, visita à Ilha de Taquile, com almoço incluído, e passagem pela Praia de Collata.',
  'No retorno ao trem, um chá da tarde marca essa pausa antes de seguir viagem. À noite, o trajeto continua em direção a Sacacoha.']

},
{
  day: 'Dia 3',
  title: 'Arequipa',
  location: 'Lagunillas → Sumbay → Arequipa',
  image: nascerSolImg,
  paragraphs: [
  'O amanhecer traz uma das cenas mais bonitas da viagem: o nascer do sol sobre o Lago Lagunillas.',
  'Depois do café da manhã, a jornada continua até as cavernas de Sumbay, onde pinturas rupestres com mais de 8 mil anos revelam histórias silenciosas do passado.',
  'O almoço acontece a bordo, enquanto o trem segue para Arequipa.',
  'A chegada marca o fim da viagem, com a opção de um tour panorâmico pela cidade ou transfer direto ao aeroporto.']

}