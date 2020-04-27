import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  stagger,
} from '@angular/animations';

export const slideInAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':enter,:leave', [style({ position: 'absolute', opacity: 0 })], {
      optional: true,
    }),

    query(
      ':leave',
      [style({ opacity: 1 }), animate(300, style({ opacity: 0 }))],
      { optional: true }
    ),

    query(
      ':enter',
      [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
        // stagger(300, [animate(300, style({ opacity: 1 }))]),
      ],
      { optional: true }
    ),
  ]),
]);
