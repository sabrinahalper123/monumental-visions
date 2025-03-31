
// Monument data for the slideshow
export const monuments = [
  {
    id: 'athena',
    name: 'Athena',
    image: 'https://raw.githubusercontent.com/sabrinahalper123/monumental-visions/refs/heads/main/public/athena%20watercolor%201.jpg',
    location: 'Presidio, San Francisco',
    description: [
      "Athena would stand as a tribute to California's deep historical ties and its role as a western stronghold of the United States.",
      "The Greek goddess of wisdom and war, Athena, appears on the Great Seal of California, symbolizing the state's immediate statehood—born fully formed, just as Athena was.",
      "Standing in the Presidio of San Francisco, the monument would honor the land's long-standing history. Established in 1776 by the Spanish, the Presidio played a role in every major American conflict from the Civil War through Desert Storm.",
      "Athena embodies justice, wisdom, and heroic endeavor, standing as a guardian over the bay—an enduring symbol of the West's pursuit of progress."
    ]
  },
  {
    id: 'phoenix',
    name: 'Rising Phoenix',
    image: 'https://i.imgur.com/DpfVD5t.jpeg',
    location: 'Pacific Palisades, California',
    description: [
      "The Rising Phoenix stands as a powerful symbol of rebirth, renewal, and resilience for Pacific Palisades, especially in the wake of the devastating fires earlier this year.",
      "A timeless emblem of transformation, the mythical bird rising from the ashes reflects the community's strength and ability to rebuild.",
      "Positioned along the cliffs overlooking the Pacific, the monument serves as a reminder that from destruction comes renewal, and from endings, new beginnings emerge."
    ]
  }
];

export type Monument = typeof monuments[0];
