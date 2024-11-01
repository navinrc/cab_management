# Copyright (c) 2024, Navin R C and Contributors
# See license.txt

# import frappe
from frappe.tests import IntegrationTestCase, UnitTestCase


# On IntegrationTestCase, the doctype test records and all
# link-field test record depdendencies are recursively loaded
# Use these module variables to add/remove to/from that list
EXTRA_TEST_RECORD_DEPENDENCIES = []  # eg. ["User"]
IGNORE_TEST_RECORD_DEPENDENCIES = []  # eg. ["User"]


class TestDriver(UnitTestCase):
	"""
	Unit tests for Driver.
	Use this class for testing individual functions and methods.
	"""

	pass


class TestDriver(IntegrationTestCase):
	"""
	Integration tests for Driver.
	Use this class for testing interactions between multiple components.
	"""

	pass
