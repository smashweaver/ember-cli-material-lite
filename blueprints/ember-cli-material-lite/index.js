/* eslint-env node */
module.exports = {
  normalizeEntityName() {},

  afterInstall(options) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-sass' },
        { name: 'ember-cli-material-icons' },
        { name: 'ember-truth-helpers '}
      ]
    })
    .then(() => {
      return this.addPackagesToProject([
        { name: 'broccoli-funnel', target: '^2.0.1' },
        { name: 'broccoli-merge-trees', target: '^2.0.0' }
      ]);
    });
  }
};
