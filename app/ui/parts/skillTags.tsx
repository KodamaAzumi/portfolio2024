export default function SkillTags({ skills, medium }: { skills: string[]; medium: string }) {
  return (
    <ul className="flex font-medium flex-wrap gap-2">
      {skills.map((skill) => (
        <li className="bg-white px-2 rounded-sm" key={skill + '_SkillTagsKey'}>
          {skill}
        </li>
      ))}
      <li className="text-sky-900 px-2 bg-sky-300 rounded-sm">{medium}</li>
    </ul>
  );
}
