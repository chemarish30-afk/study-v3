export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  async bootstrap({ strapi }) {
    // Check if data already exists to avoid duplicate seeding
    const examCourseCount = await strapi.entityService.count('api::exam-course.exam-course');
    
    if (examCourseCount === 0) {
      console.log('Seeding e-learning data...');
      
      // Create ExamCourse
      const jeeCourse = await strapi.entityService.create('api::exam-course.exam-course', {
        data: {
          name: 'JEE-2026',
          code: 'jee-2026',
          slug: 'jee-2026',
          description: 'Joint Entrance Examination 2026 preparation course',
          publishedAt: new Date(),
        },
      });

      // Create Subjects
      const physics = await strapi.entityService.create('api::subject.subject', {
        data: {
          name: 'Physics',
          code: 'physics',
          slug: 'physics',
          description: 'Physics subject for JEE preparation',
          publishedAt: new Date(),
        },
      });

      const chemistry = await strapi.entityService.create('api::subject.subject', {
        data: {
          name: 'Chemistry',
          code: 'chemistry',
          slug: 'chemistry',
          description: 'Chemistry subject for JEE preparation',
          publishedAt: new Date(),
        },
      });

      const mathematics = await strapi.entityService.create('api::subject.subject', {
        data: {
          name: 'Mathematics',
          code: 'mathematics',
          slug: 'mathematics',
          description: 'Mathematics subject for JEE preparation',
          publishedAt: new Date(),
        },
      });

      // Create Units
      const mechanics = await strapi.entityService.create('api::unit.unit', {
        data: {
          name: 'Mechanics',
          code: 'mechanics',
          slug: 'mechanics',
          summary: 'Classical mechanics and motion',
          publishedAt: new Date(),
        },
      });

      const electrodynamics = await strapi.entityService.create('api::unit.unit', {
        data: {
          name: 'Electrodynamics',
          code: 'electrodynamics',
          slug: 'electrodynamics',
          summary: 'Electric and magnetic fields',
          publishedAt: new Date(),
        },
      });

      const algebra = await strapi.entityService.create('api::unit.unit', {
        data: {
          name: 'Algebra',
          code: 'algebra',
          slug: 'algebra',
          summary: 'Algebraic concepts and equations',
          publishedAt: new Date(),
        },
      });

      const calculus = await strapi.entityService.create('api::unit.unit', {
        data: {
          name: 'Calculus',
          code: 'calculus',
          slug: 'calculus',
          summary: 'Differential and integral calculus',
          publishedAt: new Date(),
        },
      });

      const organicBasics = await strapi.entityService.create('api::unit.unit', {
        data: {
          name: 'Organic Basics',
          code: 'organic-basics',
          slug: 'organic-basics',
          summary: 'Fundamental organic chemistry',
          publishedAt: new Date(),
        },
      });

      const physicalChemistry = await strapi.entityService.create('api::unit.unit', {
        data: {
          name: 'Physical Chemistry',
          code: 'physical-chemistry',
          slug: 'physical-chemistry',
          summary: 'Physical principles in chemistry',
          publishedAt: new Date(),
        },
      });

      // Create Chapters
      const newtonsLaws = await strapi.entityService.create('api::chapter.chapter', {
        data: {
          title: "Newton's Laws",
          code: 'newtons-laws',
          slug: 'newtons-laws',
          overview: 'Fundamental laws of motion',
          publishedAt: new Date(),
        },
      });

      const workEnergy = await strapi.entityService.create('api::chapter.chapter', {
        data: {
          title: 'Work & Energy',
          code: 'work-energy',
          slug: 'work-energy',
          overview: 'Work-energy theorem and conservation',
          publishedAt: new Date(),
        },
      });

      const differentialCalculus = await strapi.entityService.create('api::chapter.chapter', {
        data: {
          title: 'Differential Calculus',
          code: 'differential-calculus',
          slug: 'differential-calculus',
          overview: 'Derivatives and their applications',
          publishedAt: new Date(),
        },
      });

      const integrationBasics = await strapi.entityService.create('api::chapter.chapter', {
        data: {
          title: 'Integration Basics',
          code: 'integration-basics',
          slug: 'integration-basics',
          overview: 'Fundamental integration techniques',
          publishedAt: new Date(),
        },
      });

      // Create Modules
      const conceptLecture = await strapi.entityService.create('api::module.module', {
        data: {
          title: 'Concept Lecture',
          code: 'concept-lecture',
          slug: 'concept-lecture',
          type: 'lecture',
          publishedAt: new Date(),
        },
      });

      const problemSet01 = await strapi.entityService.create('api::module.module', {
        data: {
          title: 'Problem Set 01',
          code: 'problem-set-01',
          slug: 'problem-set-01',
          type: 'practice',
          publishedAt: new Date(),
        },
      });

      const revisionNotes = await strapi.entityService.create('api::module.module', {
        data: {
          title: 'Revision Notes',
          code: 'revision-notes',
          slug: 'revision-notes',
          type: 'reference',
          publishedAt: new Date(),
        },
      });

      const unitTest = await strapi.entityService.create('api::module.module', {
        data: {
          title: 'Unit Test',
          code: 'unit-test',
          slug: 'unit-test',
          type: 'assessment',
          publishedAt: new Date(),
        },
      });

      // Create Contents
      const newtonsLawsIntro = await strapi.entityService.create('api::content.content', {
        data: {
          title: "Newton's Laws – Intro",
          slug: 'newtons-laws-intro',
          kind: 'video',
          body: 'Introduction to Newton\'s three laws of motion',
          url: 'https://example.com/videos/newtons-laws-intro',
          durationMinutes: 15,
          publishedAt: new Date(),
        },
      });

      const workEnergyTheorem = await strapi.entityService.create('api::content.content', {
        data: {
          title: 'Work-Energy Theorem Explained',
          slug: 'work-energy-theorem-explained',
          kind: 'article',
          body: 'Detailed explanation of the work-energy theorem with examples',
          publishedAt: new Date(),
        },
      });

      const differentiationFormulae = await strapi.entityService.create('api::content.content', {
        data: {
          title: 'Differentiation Formulae Sheet',
          slug: 'differentiation-formulae-sheet',
          kind: 'pdf',
          body: 'Comprehensive sheet of differentiation formulae',
          url: 'https://example.com/pdfs/differentiation-formulae.pdf',
          publishedAt: new Date(),
        },
      });

      const mechanicsUnitTest = await strapi.entityService.create('api::content.content', {
        data: {
          title: 'Mechanics Unit Test',
          slug: 'mechanics-unit-test',
          kind: 'quiz',
          body: 'Comprehensive test covering mechanics concepts',
          durationMinutes: 60,
          publishedAt: new Date(),
        },
      });

      // Connect relations
      // ExamCourse ↔ Subjects
      await strapi.entityService.update('api::exam-course.exam-course', jeeCourse.id, {
        data: {
          subjects: {
            connect: [physics.id, chemistry.id, mathematics.id],
          },
        },
      });

      // Subject ↔ Units
      await strapi.entityService.update('api::subject.subject', physics.id, {
        data: {
          units: {
            connect: [mechanics.id, electrodynamics.id],
          },
        },
      });

      await strapi.entityService.update('api::subject.subject', mathematics.id, {
        data: {
          units: {
            connect: [algebra.id, calculus.id],
          },
        },
      });

      await strapi.entityService.update('api::subject.subject', chemistry.id, {
        data: {
          units: {
            connect: [organicBasics.id, physicalChemistry.id],
          },
        },
      });

      // Unit ↔ Chapters
      await strapi.entityService.update('api::unit.unit', mechanics.id, {
        data: {
          chapters: {
            connect: [newtonsLaws.id, workEnergy.id],
          },
        },
      });

      await strapi.entityService.update('api::unit.unit', calculus.id, {
        data: {
          chapters: {
            connect: [differentialCalculus.id, integrationBasics.id],
          },
        },
      });

      // Chapter ↔ Modules
      await strapi.entityService.update('api::chapter.chapter', newtonsLaws.id, {
        data: {
          modules: {
            connect: [conceptLecture.id, problemSet01.id],
          },
        },
      });

      await strapi.entityService.update('api::chapter.chapter', workEnergy.id, {
        data: {
          modules: {
            connect: [revisionNotes.id, unitTest.id],
          },
        },
      });

      // Module ↔ Contents
      await strapi.entityService.update('api::module.module', conceptLecture.id, {
        data: {
          contents: {
            connect: [newtonsLawsIntro.id, workEnergyTheorem.id],
          },
        },
      });

      await strapi.entityService.update('api::module.module', problemSet01.id, {
        data: {
          contents: {
            connect: [mechanicsUnitTest.id],
          },
        },
      });

      await strapi.entityService.update('api::module.module', revisionNotes.id, {
        data: {
          contents: {
            connect: [differentiationFormulae.id],
          },
        },
      });

      console.log('E-learning data seeded successfully!');
    } else {
      console.log('Data already exists, skipping seed...');
    }
  },
};
